import React from "react";
import "../styles/components/Product.css";
import RainCity from "../assets/RainCityTitleES.jpg";

function Product() {
  return (
    <div className="Product">
      <div>
        <img
          className="productImg"
          src={RainCity}
          alt="Photo for the cover of a videogame Rain City with subtitle 15 days to the end"
        />
      </div>
      <div className="productDetails">
        <h2>Rain City</h2>
        <p>
          Lorem ipsum odor amet, consectetuer
          adipiscing elit. Mi suspendisse molestie
          eu, non pellentesque adipiscing. Mauris
          nostra magna nec inceptos fusce tempor.
          Vestibulum felis congue turpis ut mi
          egestas.
        </p>
        <button>Free Trial</button>
      </div>
    </div>
  );
}

export default Product;
