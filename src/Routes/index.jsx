import App from "../Pages/Home/";
import Support from "../Pages/Support";
import Account from "../Pages/Account";
import Favorite from "../Pages/Favorite";
import Summarize from "../Pages/Summarize";
import Setting from "../Pages/Setting";
import CheckOut from "../Pages/CheckOut";
import DefaultLayout from "../Layout/DefaultLayout";
export const publicRoutes = [
  {
    path: "/",
    component: App,
    layout: DefaultLayout,
  },
  {
    path: "/support",
    component: Support,
  },
  {
    path: "/account",
    component: Account,
  },
  {
    path: "/favorite",
    component: Favorite,
  },
  {
    path: "/summarize",
    component: Summarize,
  },
  {
    path: "/setting",
    component: Setting,
  },
  {
    path: "/checkout",
    component: CheckOut,
    // layout: null,
  },
];
