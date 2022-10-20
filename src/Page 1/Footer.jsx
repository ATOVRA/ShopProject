import React from "react";
import "./Footer.css";
import MilandiLogo from "../Image/milandLogo.jpg";
import { MdLocationOn } from "react-icons/md";
import {GrMail} from "react-icons/gr"

const Footer = () => {
  return (
    <section className="footer">
      <div className="footerImperia">
        <h2>про imperia</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pretium
          aenean dignissim sit cursus dictumst adipiscing nunc.
        </p>
        <img src={MilandiLogo} alt="Milandi" />
      </div>

      <div className="contactsDiv">
        <div className="contact">
          <h2>контакты</h2>
          <a href="#">+998 90 958 78 87</a>
          <a href="#">support@fonon.uz</a>
        </div>
        <div className="workTime">
          <h2>рабочее время</h2>
          <p>По будням 9:00 to 18:00</p>
          <p>В выходные 11:00 to 18:00</p>
        </div>
      </div>

      <div className="menu">
        <h2>Меню</h2>
        <ul>
          <li>Главная</li>
          <li>О нас</li>
          <li>Категории</li>
          <li>Сотрудничество</li>
        </ul>
      </div>

      <div className="catigories">
        <h2>категории</h2>
        <ul>
          <li>Женская одежда</li>
          <li>Мужская одежда</li>
          <li>Детская одежда</li>
          <li>Обувь</li>
          <li>Сумки</li>
          <li>Аксесуары</li>
        </ul>
      </div>
    </section>
  );
};
export default Footer;

// export const FooterResponsive = () => {
//   return (
//     <section id="footerResponsive">
//       <h1>
//         High fidelity wireframes include more real content, specific typography
//         choices, and information on image.
//       </h1>
//       <div className="menuRes">
//         <div>
//         <p>Catalog</p>
//         <p>Popular</p>
//         <p>Pricing</p>
//         <p>Features</p>
//         </div>
//         <div>
//         <p>About</p>
//         <p>Blog</p>
//         <p>Contacts</p>
//         </div>
//       </div>
//       <div className="locationDiv">
//         <div style={{marginTop:'40px', marginLeft:'32px'}}>
//           <MdLocationOn style={{color:'#0045FF', fontSize:'23px', marginTop:'5px'}}/>
//           <p>Los Angeles,<br/> 359 Hidden Valley Road</p>
//         </div>
//         <div className="gmailDiv">
//           <GrMail style={{color:'#0045FF', fontSize:'20px'}}/>
//           <a style={{cursor:'pointer'}}>Hellohero@gmail.com</a>
//         </div>
//       </div>
//     </section>
//   );
// };
