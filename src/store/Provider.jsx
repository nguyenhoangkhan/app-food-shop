import { useReducer, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth, providerGoogle, providerFacebook } from "../firebase";
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
        setUser(user);
      } else {
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
      .then((res) => {})
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
        console.log(err.message);
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
  const signInGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        window.location = "/";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };
  const signInFacebook = () => {
    signInWithPopup(auth, providerFacebook)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        window.location = "/";
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
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
    signInGoogle,
    signInFacebook,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default Provider;
