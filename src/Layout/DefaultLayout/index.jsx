import FooterMenu from "../../components/FooterMenu";
import Header from "../../components/Header";
const HeaderOnly = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <FooterMenu />
    </div>
  );
};

export default HeaderOnly;
