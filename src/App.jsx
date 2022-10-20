import React from "react";
import { Route, Routes } from "react-router";
import Body from "./Page 1/Body";
import Page2Body from "./Page 2/Page2Body";
import { ProductInfo } from "./Product Info/ProductInfo";
import { FilterPage } from "./FilterPage/FilterPage";
import Basket from "./Basket/Basket";
import HeadFoter from "./Page 1/HeadFoter";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <HeadFoter>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/onas" element={<Page2Body />} />
          <Route path="/Мужская одежда" element={<FilterPage />} />
          <Route path="/product-info" element={<ProductInfo />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </HeadFoter>
    </>
  );
}

export default App;
