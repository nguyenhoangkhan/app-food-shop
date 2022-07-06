import App from "../Pages/Home/";
import Support from "../Pages/Support";
import Account from "../Pages/Account";
import Favorite from "../Pages/Favorite";
import Summarize from "../Pages/Summarize";
import Setting from "../Pages/Setting";
import CheckOut from "../Pages/CheckOut";
import HeaderOnly from "../Layout/DefaultLayout";
import FooterMenuOnly from "../Layout/FooterMenuOnly";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
export const publicRoutes = [
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
    path: "/summarize",
    component: Summarize,
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
  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: null },
];
