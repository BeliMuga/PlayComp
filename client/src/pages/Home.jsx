import React from "react";
import Action from "../components/Action.jsx";
import Value from "../components/Value.jsx";
import Product from "../components/Product.jsx";
import Why from "../components/Why.jsx";
import Carousel from "../components/Carousel.jsx";
import Contact from "../components/Contact.jsx";

function Home() {
  return (
    <div className="Home">
      <Action></Action>
      <Carousel></Carousel>
      <Value></Value>
      <Product></Product>
      <Why></Why>
      <Contact></Contact>
    </div>
  );
}

export default Home;
