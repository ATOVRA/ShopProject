import "./Center.css";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { TbStars, TbTruckDelivery } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import {
  TiStarHalfOutline,
  TiStarFullOutline,
  TiStarOutline,
} from "react-icons/ti";
import ShopInfoImg from "../Image/shopInfoImg.png";
import { data } from "./data.jsx";
import { NewProductData } from "./data.jsx";
// import productImg1 from "../Image/productImg1.png";
// import productImg2 from "../Image/productImg2.png";
// import productImg3 from "../Image/productImg3.png";
// import productImg4 from "../Image/productImg4.png";
import CatigoriesImg1 from "../Image/catigoriesImg1.png";
import CatigoriesImg2 from "../Image/catigoriesImg2.png";
import CatigoriesImg3 from "../Image/catigoriesImg3.png";
import CatigoriesImg4 from "../Image/catigoriesImg4.png";
import Iphone12Pro from "../Image/iPhone 12 Pro.png";
import AppStore from "../Image/AppStore.jpg";
import GooglePlay from "../Image/GooglePlay.jpg";
import DesignProductImg from "../Image/fastProduct.png";
import Footer from "./Footer.jsx";

export const Center = () => {
  return (
    <main className="CenterSection">
      <FastShop />
      <FastShopResponsive />
      <Advantages />
      <ShopProducts />
      <Catigories />
      <DownloadApp />
      <NewProduct />
      <DesignProduct />
      <Discounts/>
      <Footer/>
      {/* <FooterResponsive/> */}
    </main>
  );
};

const FastShop = () => {
  return (
    <div className="fastShop">
      <div className="fastShopInfo">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          <h1>Быстрый и удобный шоппинг, не выходя из дома.</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            lectus odio vitae, duis nec ut velit, fermentum. Diam sollicitudin
            arcu euismod morbi. Adipiscing bibendum elementum, fermentum amet
            quis erat.
          </h3>
          <div className="allProducts">
            <IoMdArrowDropright
              style={{ color: "#FFC000", fontSize: "17px" }}
            />
            <p>Все товары</p>
          </div>
        </div>
      </div>
      <img src={ShopInfoImg} alt="Shopping" className="shopInfoImg" />
      <div className="infoNextButton">
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid black",
          }}
        >
          <span style={{ opacity: "1" }}></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

const FastShopResponsive = () => {
  return (
    <div className="fastShopInfoRes">
      <h1>Быстрый и удобный шоппинг</h1>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
        lectus odio vitae, duis nec ut velit, fermentum.
      </h3>
      <div className="allProductsRes">
        <IoMdArrowDropright className="allProductsArrow" />
        <p>Все товары</p>
      </div>
    </div>
  );
};

const Advantages = () => {
  return (
    <div className="advantages">
      <h1>Наши преимущества</h1>
      <div className="advantagesProductDiv">
        <div className="advantagesProduct1">
          <TbStars style={{ fontSize: "22px" }} />
          <p>Лучший сервис</p>
        </div>
        <div className="advantagesProduct2">
          <TbTruckDelivery style={{ fontSize: "24px" }} />
          <p>Экспресс доставка </p>
        </div>
        <div className="advantagesProduct3">
          <AiOutlineLike style={{ fontSize: "22px" }} />
          <p>Лучшее качество в стране</p>
        </div>
      </div>
      <div className="advantagesNextButton">
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            border: "1px solid black",
          }}
        >
          <span style={{ opacity: "1" }}></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

const ShopProducts = () => {
  return (
    <div className="shopProducts">
      <h1>Лучшие товары</h1>
      <div style={{ display: "flex", gap: "35px" }}>
        {data.map((item, index) => {
          // if (index == 0)
            return (
              <div className="productsCard" key={index}>
                <img src={item.productImg} className="productsImg" />
                <div className="productsCardBottom">
                  <h2>{item.productTitle}</h2>
                  <p className="productInfo">{item.productInfo}</p>
                  <div className="productPopDiv">
                    <TiStarFullOutline className="productsStar" />
                    <TiStarFullOutline className="productsStar" />
                    <TiStarFullOutline className="productsStar" />
                    <TiStarHalfOutline className="productsStar" />
                    <TiStarOutline className="productsStar" />
                    <p className="productPop">{item.productPop}</p>
                    <p className="productPrice">
                      {item.productPrice}{" "}
                      <span style={{ marginLeft: "5px" }}> У.E.</span>
                    </p>
                  </div>
                  <button>Добавить в корзину</button>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

const Catigories = () => {
  return (
    <section id="catigories">
      <h1>Категории</h1>
      <div className="catigoriesDivs">
        <div className="catigoriesCards1">
          <img src={CatigoriesImg1} alt="#" className="catigoriesImgs" />
          <div className="catigoriesButton">
            <p>Женская обувь</p>
          </div>
        </div>
        <div className="catigoriesCards2">
          <img src={CatigoriesImg2} alt="#" className="catigoriesImgs" />
          <div className="catigoriesButton">
            <p>Женская обувь</p>
          </div>
        </div>
        <div className="catigoriesCards3">
          <img src={CatigoriesImg3} alt="#" className="catigoriesImgs" />
          <div className="catigoriesButton">
            <p>Женская обувь</p>
          </div>
        </div>
        <div className="catigoriesCards4">
          <img src={CatigoriesImg4} alt="#" className="catigoriesImgs" />
          <div className="catigoriesButton">
            <p>Женская обувь</p>
          </div>
        </div>
      </div>
      <div className="catigoriesNextButton">
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            border: "1px solid black",
          }}
        >
          <span style={{ opacity: "1" }}></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </section>
  );
};

const DownloadApp = () => {
  return (
    <section className="downloadApp">
      <img src={Iphone12Pro} alt="#" className="iphone12" />
      <div className="appInfo">
        <h1>Скачай приложение и получай призы каждый день</h1>
        <h2>Скачай приложение и получай призы.</h2>
        <p>
          Скачав наш приложение вы получаете возможность играть в призовые игры
          каждый день и выигровать разного рода подарки для себя. В нашем
          приложении призовые игры проходят аблолютно каждый день и всё это
          совершенно бесплатно.
        </p>
        <h4>
          Скачав наш приложение вы получаете возможность играть в призовые игры
          каждый день и выигровать разного рода подарки для себя.
        </h4>
        <div className="downloadAps">
          <img src={AppStore} alt="#" />
          <img src={GooglePlay} alt="#" />
        </div>
      </div>
    </section>
  );
};

const NewProduct = () => {
  return (
    <section className="newProduct">
      <h1>Новые товары</h1>
      <div className="newProductCards">
        {NewProductData.map((item, index) => {
          // if (index == 0)
            return (
              <div className="productsCard" key={index}>
                <img src={item.productImg} className="productsImg" />
                <div className="productsCardBottom">
                  <h2>{item.productTitle}</h2>
                  <p className="productInfo">{item.productInfo}</p>
                  <div className="productPopDiv">
                    <TiStarFullOutline className="productsStar" />
                    <TiStarFullOutline className="productsStar" />
                    <TiStarFullOutline className="productsStar" />
                    <TiStarHalfOutline className="productsStar" />
                    <TiStarOutline className="productsStar" />
                    <p className="productPop">{item.productPop}</p>
                    <p className="productPrice">
                      {item.productPrice}{" "}
                      <span style={{ marginLeft: "5px" }}> У.E.</span>
                    </p>
                  </div>
                  <button>Добавить в корзину</button>
                </div>
              </div>
            );
        })}
      </div>
      <div className="newProductNextButton">
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            border: "1px solid black",
          }}
        >
          <span style={{ opacity: "1" }}></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </section>
  );
};

const DesignProduct = () => {
  return (
    <section className="designProduct">
      <img src={DesignProductImg} alt="#" />
      <div className="designProductInfo">
        <h1>Создай свой лук на все случаи жизни в “Imperia”</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
          sollicitudin a cursus in. Vel sit donec semper magna dignissim. Amet,
          mi justo at metus vestibulum sollicitudin lacus. Nunc vel egestas
          fermentum pellentesque sed vitae vel.
        </p>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
          sollicitudin a cursus in. Vel sit donec semper magna dignissim.
        </h4>
        <button>начать покупки</button>
      </div>
    </section>
  );
};

const Discounts = () => {
  return (
    <section className="discounts">
      <h1>
        Скидка <span>30%</span> на первую покупку обслютно для всех
      </h1>
    </section>
  );
};
