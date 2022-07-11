import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuContainer from "../FooterMenuItem/FooterMenuItem";
import classNames from "classnames/bind";
import styles from "./FooterMenu.module.css";
const cx = classNames.bind(styles);
const FooterMenu = () => {
  return (
    <div className={cx("bottomMenu")}>
      <MenuContainer link={"/"} icon={<HomeIcon />} isHome />
      <MenuContainer link={"/favorite"} icon={<FavoriteIcon />} />
      <MenuContainer link={"/account"} icon={<AccountCircleIcon />} />
      <MenuContainer link={"/support"} icon={<ChatIcon />} />
      <MenuContainer link={"/setting"} icon={<SettingsIcon />} />
    </div>
  );
};

export default FooterMenu;
