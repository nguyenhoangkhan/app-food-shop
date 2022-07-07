import { useEffect, useState, useContext, useMemo } from "react";
import "../../App.css";
import { MenuItems, Items } from "../../assets/fake-data/data";
import { StoreContext } from "../../store";
import BannerName from "../../components/BannerName";
import BannerImage from "../../components/BannerImage";
import SubMenuContainer from "../../components/SubMenuContainer";
import MenuCard from "../../components/MenuCard";
import ItemCard from "../../components/ItemCard";
import RightMenu from "../../components/RightMenu";
import Loading from "../../components/Loading";
function App() {
  /*Main Dish State */
  const [isMainData, setMainData] = useState(
    Items.filter((item) => item.itemId === "buger01")
  );
  const [loading, setLoading] = useState(true);
  const [state] = useContext(StoreContext);
  const cart = useMemo(() => [...state.cart], [state.cart]);
  useEffect(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const setMenuActive = () => {
      $$("#menu li").forEach((item) => item.classList.remove("active"));
    };
    $$("#menu li").forEach((li) => {
      li.onclick = () => {
        setMenuActive();
        li.classList.add("active");
      };
    });
    /* Menu card active toggle */
    $$(".rowMenuCard").forEach((card) => {
      card.onclick = function () {
        $(".rowMenuCard.active").classList.remove("active");
        this.classList.add("active");
      };
    });
    $(".shoppingCart").onclick = function () {
      $(".rightMenu").classList.toggle("active");
    };
  }, [isMainData, cart]);
  useEffect(() => {
    const loadingTime = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(loadingTime);
  }, []);
  /*Set main dish on filter*/
  const setData = (id) => {
    setMainData(Items.filter((item) => item.itemId === id));
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="App">
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName />
            <BannerImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              }
            />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {MenuItems.map((data, index) => (
                <div key={index} onClick={() => setData(data.itemId)}>
                  {" "}
                  <MenuCard
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive={data.id === 1 ? true : false}
                  />{" "}
                </div>
              ))}
            </div>
            <div className="disitemContainer">
              {isMainData &&
                isMainData.map((data, index) => (
                  <ItemCard
                    key={index}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                    qty={data.quantity}
                  />
                ))}
            </div>
          </div>
        </div>
        <RightMenu />
      </main>
      {/* Bottom Menu */}
    </div>
  );
}

export default App;
