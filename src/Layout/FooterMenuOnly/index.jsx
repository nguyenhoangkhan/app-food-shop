import FooterMenu from "../../components/FooterMenu";

const FooterMenuOnly = (props) => {
  return (
    <div>
      {props.children}
      <FooterMenu />
    </div>
  );
};

export default FooterMenuOnly;
