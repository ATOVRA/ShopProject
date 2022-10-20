import "./Header.css";
import React from "react";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { GrMenu } from "react-icons/gr";
import MilandiLogo from "../Image/milandLogo.jpg";
import { Center } from "./Center";
import { Page2Body } from "../Page 2/Page2Body";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const basket = useSelector((state) => state.cart.basket);
  return (
    <section className="header">
      <div className="header-top">
        <div className="headerLanguages">
          <p style={{ color: "#fff" }}>RU</p>
          <p style={{ color: "#fff", opacity: "30%" }}>UZB</p>
        </div>
      </div>
      <div className="header-bottom">
        <GrMenu id="menuButton" />
        <img src={MilandiLogo} alt="Logo" className="milandiLogo" />
        <h1>MILAND</h1>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/onas">O нас</Link>
          </li>
          <li>
            <Link>Категории</Link>
          </li>
          <li>
            <Link to="/Мужская одежда">Сотрудничество</Link>
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginLeft: "270px",
          }}
        >
          <button className="logIn ">
            <p>Войти</p>
          </button>
          <button className="logUp">Зарегистрироваться</button>
        </div>
        <Link to={"/basket"} style={{ position: "relative" }}>
          <FiShoppingCart className="headerShopping" />
          {basket.length !== 0 ? (
            <div className="shoppingValue">{basket.length}</div>
          ) : null}
        </Link>
      </div>
    </section>
  );
};
export default Header;
