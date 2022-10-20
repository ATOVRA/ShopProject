import React from "react";
import Footer from "./Footer";
import FooterResponsive from "./FooterResponsive";
import Header from "./Header";

function HeadFoter({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FooterResponsive />
    </>
  );
}

export default HeadFoter;
