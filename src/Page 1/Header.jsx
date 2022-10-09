import "./Header.css";
import React from "react";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import {GrMenu} from "react-icons/gr"
import MilandiLogo from "../Image/milandLogo.jpg";

export const Header = () => {
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
          <li>Главная</li>
          <li>O нас</li>
          <li>Категории</li>
          <li>Сотрудничество</li>
        </ul>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginLeft: "550px",
          }}
        >
          <button className="logIn ">
            <p>Войти</p>
          </button>
          <button className="logUp">Зарегистрироваться</button>
        </div>
        <FiShoppingCart className="headerShopping" />
      </div>
    </section>
  );
};
