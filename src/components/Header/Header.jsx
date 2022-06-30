import { useContext, useEffect, useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StoreContext } from "../../store";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Search from "../Search";
const Header = () => {
  const [state] = useContext(StoreContext);
  const [username, setUsername] = useState(localStorage.getItem("username"));
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, [username]);
  const catalogProfileUser = [
    {
      title: "Đăng xuất",
      path: "/",
      icon: faArrowRightFromBracket,
    },
  ];
  const catalogProfileGuest = [
    {
      title: "Sign Up",
      path: "sign in",
      icon: faArrowRightFromBracket,
    },
    {
      title: "Sign In",
      path: "/",
      icon: faArrowRightFromBracket,
    },
  ];
  return (
    <header>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
        alt=""
        className="logo"
      />
      <Search />
      <Tippy
        interactive
        render={(attrs) => (
          <div className="subProfile" tabIndex="-1" {...attrs}>
            {username
              ? catalogProfileUser.map((item, idx) => (
                  <Link key={idx} to={item.path}>
                    {" "}
                    <FontAwesomeIcon icon={item.icon} /> {item.title}
                  </Link>
                ))
              : catalogProfileGuest.map((item, idx) => (
                  <Link key={idx} to={item.path}>
                    {" "}
                    <FontAwesomeIcon icon={item.icon} /> {item.title}
                  </Link>
                ))}
          </div>
        )}
      >
        <div className="profileContainer">
          <div className="imgBox">
            <img
              src="https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png"
              className="profilePic"
              alt=""
            />
          </div>
          <h2 className="userName">{username || "GUEST"}</h2>
        </div>
      </Tippy>
      <div className="shoppingCart">
        <ShoppingCartIcon className="cart" />
        {state.cartQty !== 0 ? (
          <div className="cart_content">
            <p>{state.cartQty}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
