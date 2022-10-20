import React, { useState } from "react";
import "./FilterPage.css";
import { IoMdArrowDropdown } from "react-icons/io";

export const FilterPage = () => {
  return (
    <main>
      <section id="filterPage">
        <div className="filterDiv">
          <div className="filterTitle">Filter</div>
          <div className="categoryDiv">
            <div className="category">
              Category <IoMdArrowDropdown className="filterArrowIcons" />
            </div>
            <div className="categoryFilter">
              <div>
                Women’s wear
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="genderDiv">
            Gender <IoMdArrowDropdown className="filterArrowIcons" />
          </div>
          <div className="priceDiv">
            Price <IoMdArrowDropdown className="filterArrowIcons" />
          </div>
          <button className="cleanFilterBTN">Clean filter</button>
        </div>

        <div className="products"></div>
      </section>
    </main>
  );
};
