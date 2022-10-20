import React from "react";
import "./Page2Body.css"
import Header from "../Page 1/Header";
import ONasImg from '../Image/ONasImg.png'
import { AiOutlineLike } from "react-icons/ai";
import { TbStars, TbTruckDelivery } from "react-icons/tb";
import Iphone12Pro from "../Image/iPhone 12 Pro.png";
import AppStore from "../Image/AppStore.jpg";
import GooglePlay from "../Image/GooglePlay.jpg";
import MapImg from "../Image/map.png"
import Footer from "../Page 1/Footer";
import FooterResponsive from "../Page 1/FooterResponsive";


export const Page2Body = () => {
  return (
    <main className="Page2Body">
      <ONas/>
      <Advantages/>
      <DownloadApp/>
      <MapSection/>
    </main>
  );
};
export default Page2Body;

const ONas = () => {
  return (
    <section className="ONas">
      <h1>О нас</h1>
      <div className="infoDiv">
        <div>
          <h2>
            «Потрясающий опыт, мне это нравится много. Спасибо команде.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            leo, in sit tellus fermentum donec quisque diam molestie. Enim purus
            ullamcorper ultricies nisi. Eu sit laoreet egestas nascetur lacinia
            donec nunc viverra. Eu nullam cras eget egestas dui id platea magna.
            Massa lorem ultrices mauris tellus, mattis eu leo bibendum lobortis.
          </p>
        </div>
        <img src={ONasImg} alt="O Nas" />
      </div>
      <div className="infoDivRes">
        <img src={ONasImg} alt="O Nas" />
          <h2>
            «Потрясающий опыт, мне это нравится много. Спасибо команде.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            leo, in sit tellus fermentum donec quisque diam molestie. Enim purus
            ullamcorper ultricies nisi. Eu sit laoreet egestas nascetur lacinia
            donec nunc viverra. Eu nullam cras eget egestas dui id platea magna.
            Massa lorem ultrices mauris tellus, mattis eu leo bibendum lobortis.
          </p>
      </div>
    </section>
  );
};

const Advantages = () => {
  return (
    <div className="ONasAdvantages">
      <h1>Наши преимущества</h1>
      <div className="ONasAdvantagesProductDiv">
        <div className="ONasAdvantagesProduct1">
          <TbStars style={{ fontSize: "22px" }} />
          <p>Лучший сервис</p>
        </div>
        <div className="ONasAdvantagesProduct2">
          <TbTruckDelivery style={{ fontSize: "24px" }} />
          <p>Экспресс доставка </p>
        </div>
        <div className="ONasAdvantagesProduct3">
          <AiOutlineLike style={{ fontSize: "22px" }} />
          <p>Лучшее качество в стране</p>
        </div>
      </div>
      <div className="ONasAdvantagesNextButton">
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

const MapSection = () =>{
  return(
    <section className="mapSection">
      <img src={MapImg} alt="map" />
      <div className="mapInfo">
        <h1>Работаем по всему миру.</h1>
        <div className="mapLocation">
          <div>
            <h3>Bali</h3>
            <p>508 Bridle Avenue Newnan, GA 30263</p>
          </div>
          <div className="london">
            <h3>London</h3>
            <p>508 Bridle Avenue Newnan, GA 30263</p>
          </div>
          <div className="moscow">
            <h3>Moscow</h3>
            <p>508 Bridle Avenue Newnan, GA 30263</p>
          </div>
          <div className="prague">
            <h3>Prague</h3>
            <p>508 Bridle Avenue Newnan, GA 30263</p>
          </div>
        </div>
      </div>
    </section>
  )
}