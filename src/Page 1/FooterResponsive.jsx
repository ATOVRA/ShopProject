import React from "react";
import "./Footer.css";
import MilandiLogo from "../Image/milandLogo.jpg";
import { MdLocationOn } from "react-icons/md";
import {GrMail} from "react-icons/gr"

export const FooterResponsive = () => {
    return (
      <section id="footerResponsive">
        <h1>
          High fidelity wireframes include more real content, specific typography
          choices, and information on image.
        </h1>
        <div className="menuRes">
          <div>
          <p>Catalog</p>
          <p>Popular</p>
          <p>Pricing</p>
          <p>Features</p>
          </div>
          <div>
          <p>About</p>
          <p>Blog</p>
          <p>Contacts</p>
          </div>
        </div>
        <div className="locationDiv">
          <div style={{marginTop:'40px', marginLeft:'32px'}}>
            <MdLocationOn style={{color:'#0045FF', fontSize:'23px', marginTop:'5px'}}/>
            <p>Los Angeles,<br/> 359 Hidden Valley Road</p>
          </div>
          <div className="gmailDiv">
            <GrMail style={{color:'#0045FF', fontSize:'20px'}}/>
            <a style={{cursor:'pointer'}}>Hellohero@gmail.com</a>
          </div>
        </div>
      </section>
    );
  };
  export default FooterResponsive;