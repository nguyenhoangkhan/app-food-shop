import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuContainer from "../MenuContainer/MenuContainer";

const FooterMenu = () => {
  return (
    <div className="bottomMenu">
      <ul id="menu">
        <MenuContainer link={"/"} icon={<HomeIcon />} isHome />
        <MenuContainer link={"/support"} icon={<ChatIcon />} />
        <MenuContainer link={"/account"} icon={<AccountCircleIcon />} />
        <MenuContainer link={"/favorite"} icon={<FavoriteIcon />} />
        <MenuContainer link={"/summarize"} icon={<SummarizeIcon />} />
        <MenuContainer link={"/setting"} icon={<SettingsIcon />} />
        <div className="indicators"></div>
      </ul>
    </div>
  );
};

export default FooterMenu;
