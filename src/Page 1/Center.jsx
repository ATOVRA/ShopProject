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
import productImg1 from "../Image/productImg1.png";
import productImg2 from "../Image/productImg2.png";
import productImg3 from "../Image/productImg3.png";
import productImg4 from "../Image/productImg4.png";

export const Center = () => {
  return (
    <section className="CenterSection">
      <FastShop />
      <FastShopResponsive />
      <Advantages />
      {/* <ShopProducts /> */}
    </section>
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
        <IoMdArrowDropright className="allProductsArrow"/>
        <p>Все товары</p>
      </div>
    </div>
  );
};

const Advantages = () => {
  return (
    <div className="advantages">
      <h1>Наши преимущества</h1>
      <div  className="advantagesProductDiv">
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
        {data.map((item) => {
          return (
            <div className="productsCard">
              <img src={item.productImg} className="productsImg" />
              <div style={{ padding: "5px 12px" }}>
                <h2>{item.productTitle}</h2>
                <p className="productInfo">{item.productInfo}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  <TiStarFullOutline
                    style={{
                      color: "#FFC000",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  />
                  <TiStarFullOutline
                    style={{
                      color: "#FFC000",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  />
                  <TiStarFullOutline
                    style={{
                      color: "#FFC000",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  />
                  <TiStarHalfOutline
                    style={{
                      color: "#FFC000",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  />
                  <TiStarOutline
                    style={{
                      color: "#FFC000",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  />
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
