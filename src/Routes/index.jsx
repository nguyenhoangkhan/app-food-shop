import App from "../Pages/Home/";
import Support from "../Pages/Support";
import Account from "../Pages/Account";
import Favorite from "../Pages/Favorite";
import Setting from "../Pages/Setting";
import CheckOut from "../Pages/CheckOut";
import HeaderOnly from "../Layout/DefaultLayout";
import FooterMenuOnly from "../Layout/FooterMenuOnly";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import Admin from "../Pages/Admin";

export const privateRoutes = [
  {
    path: "/",
    component: App,
    layout: HeaderOnly,
  },
  {
    path: "/support",
    component: Support,
    layout: FooterMenuOnly,
  },
  {
    path: "/account",
    component: Account,
    layout: FooterMenuOnly,
  },
  {
    path: "/favorite",
    component: Favorite,
    layout: FooterMenuOnly,
  },
  {
    path: "/setting",
    component: Setting,
    layout: FooterMenuOnly,
  },
  {
    path: "/checkout",
    component: CheckOut,
    layout: null,
  },
  {
    path: "/forgotpassword",
    component: ForgotPassword,
    layout: null,
  },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/admin", component: Admin, layout: null },
];
