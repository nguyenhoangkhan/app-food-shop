import { useReducer, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import Context from "./Context";
import Reducer, { initialState } from "./Reducer";
const Provider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        console.log(user);
        setUser("");
      }
    });
    setError("");
    setLoading(false);
    return unsubscribe;
  }, []);
  const registerUser = (email, firstName, lastName, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName}`,
        });
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };
  const loginUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        window.location = "/";
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };
  const logoutUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        //
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };
  const contextValue = {
    state,
    user,
    loading,
    error,
    dispatch,
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default Provider;
