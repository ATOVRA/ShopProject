import React from "react";
import "./ProductInfo.css";
import Header from "../Page 1/Header";
import {
  TiStarHalfOutline,
  TiStarFullOutline,
  TiStarOutline,
} from "react-icons/ti";
import { TbTruckDelivery, TbFileCheck } from "react-icons/tb";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { GiFallingStar } from "react-icons/gi";
import { data } from "../Page 1/data";
import WomensWear from "../Image/Womens wear.png";
import MensWear from "../Image/Mans wear.png";
import KidsWear from "../Image/Kids wear.png";
import Shoes from "../Image/Shoes.png";
import Footer from "../Page 1/Footer";
import FooterResponsive from "../Page 1/FooterResponsive";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentProduct } from "../store/slices/currentProduct";

export const ProductInfo = () => {
  return (
    <main className="productInfoMain">
      <ProductInfoSection />
      <SimilarProducts />
      <TopCategories />
    </main>
  );
};

const ProductInfoSection = () => {
  const product = useSelector((e) => e.currentProduct);

  return (
    <section className="productInfoSection">
      <div className="productImageDiv">
        <img className="productBigImage" src={product.productImg} alt="" />
        <div className="productMiniImage">
          <img src={product.productImg} alt="" />
          <img src={product.productImg} alt="" />
          <img src={product.productImg} alt="" />
          <img src={product.productImg} alt="" />
        </div>
      </div>

      <div className="productInfoDiv">
        <h1 className="productInfoTitle">Lorem ipsum dolor sit amet</h1>
        <div className="productPopDiv">
          <TiStarFullOutline className="productsStar" />
          <TiStarFullOutline className="productsStar" />
          <TiStarFullOutline className="productsStar" />
          <TiStarHalfOutline className="productsStar" />
          <TiStarOutline className="productsStar" />
          <p className="productPop">3,5</p>
        </div>
        <p className="productAbout">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          faucibus porttitor rutrum at tellus sodales libero. Eleifend non.
          <span> More...</span>
        </p>
        <div className="pricePopDiv">
          <div className="productPopDivRes">
            <TiStarFullOutline className="productsStarRes" />
            <TiStarFullOutline className="productsStarRes" />
            <TiStarFullOutline className="productsStarRes" />
            <TiStarHalfOutline className="productsStarRes" />
            <TiStarOutline className="productsStarRes" />
            <p className="productPopRes">3,5</p>
          </div>
          <h1 className="productInfoPriceRes">855 y.e</h1>
        </div>
        <p className="productAboutRes">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          faucibus porttitor rutrum at tellus sodales libero. Eleifend non
          velit, molestie in ut non. Faucibus diam nunc nunc gravida et viverra
          nulla.
        </p>
        <p className="productSize">Size</p>
        <div className="productSizeDiv">
          <span>28</span>
          <span>30</span>
          <span>32</span>
          <span>34</span>
          <span>36</span>
        </div>
        <button className="productShoppingBTN">Добавить в корзину</button>
        <br />
        <button className="fastShoppingBTN">Быстрая покупка</button>
        <h2 className="productInfoAdvantages">Преимущества</h2>
        <div className="advantagesDiv1">
          <TbTruckDelivery className="advantagesIcon1" />
          <p>Delivery in 7 days</p>
          <MdOutlinePrivacyTip className="advantagesIcon2" />
          <p>90-day Buyer Protection</p>
        </div>
        <div className="advantagesDiv2">
          <GiFallingStar className="advantagesIcon3" />
          <p>Trusted seller</p>
          <TbFileCheck className="advantagesIcon4" />
          <p>Aviable to order</p>
        </div>

        <div className="advantagesDivRes">
          <div className="advantagesRes1">
            <TbTruckDelivery className="advantagesIcon1Res" />
            <p>Delivery in 7 days</p>
          </div>

          <div className="advantagesRes1">
            <GiFallingStar className="advantagesIcon3Res" />
            <p>Trusted seller</p>
          </div>

          <div className="advantagesRes1">
            <MdOutlinePrivacyTip className="advantagesIcon2Res" />
            <p>90-day Buyer Protection</p>
          </div>

          <div className="advantagesRes1">
            <TbFileCheck className="advantagesIcon4Res" />
            <p>Aviable to order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SimilarProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onItemClick = (item) => {
    dispatch(setCurrentProduct(item));
    navigate("/product-info");
  };
  return (
    <section className="similarProducts">
      <h1>Похожие товары</h1>
      <div id="productCardsDiv">
        {data.map((item, index) => {
          return (
            <div className="productsCard" key={index}>
              <img
                src={item.productImg}
                className="productsImg"
                onClick={() => onItemClick(item)}
              />
              <div className="productsCardBottom">
                <h2 onClick={() => onItemClick(item)}>{item.productTitle}</h2>
                <p className="productInfo">{item.productInfo}</p>
                <div className="productPopDiv">
                  <TiStarFullOutline className="productsStar" />
                  <TiStarFullOutline className="productsStar" />
                  <TiStarFullOutline className="productsStar" />
                  <TiStarHalfOutline className="productsStar" />
                  <TiStarOutline className="productsStar" />
                  <p id="productPop">{item.productPop}</p>
                  <p id="productPrice">
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
    </section>
  );
};

const TopCategories = () => {
  return (
    <section className="topCategories">
      <h1>Лучшие категории</h1>
      <div className="catigoriesDivs">
        <div>
          <img src={WomensWear} alt="" />
          <p>Women’s wear</p>
        </div>
        <div>
          <img src={MensWear} alt="" />
          <p>Men’s wear</p>
        </div>
        <div>
          <img src={KidsWear} alt="" />
          <p>Kid’s wear</p>
        </div>
        <div>
          <img src={Shoes} alt="" />
          <p>Shoes</p>
        </div>
      </div>
      <div className="categoriesNextButton">
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
