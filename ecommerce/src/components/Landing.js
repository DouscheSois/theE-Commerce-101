import React from "react";

import Bear from "../images/bear.png";
import Add from "../images/add.png";
import ShoppingCart from "../images/shopping-cart.png";
import Kangaroo from "../images/kangaroo.png";
import Lion from "../images/lion.png";

const Landing = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Welcome to our online store!</h1>
      <p className="landing-page-desc">
        The world is changing and you can buy almost anything online so why not
        shop for a new pet with us.
      </p>
      <p className="landing-page-desc">
        We have a large selection of pets you can purchase online!
      </p>
      <div className="animal-cards">
        <div className="animal-card">
          <h3>Meet John!</h3>
          <img src={Bear} alt="bear" />
          <p>
            John is a Brown Bear. He is 15 years old. He likes to play ball and
            go fishing at the nearby rivers/lakes.
          </p>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Steve!</h3>
          <img src={Lion} alt="lion" />
          <p>
            John is a Brown Bear. He is 15 years old. He likes to play ball and
            go fishing at the nearby rivers/lakes.
          </p>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Aussie!</h3>
          <img src={Kangaroo} alt="kangaroo" />
          <p>
            John is a Brown Bear. He is 15 years old. He likes to play ball and
            go fishing at the nearby rivers/lakes.
          </p>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
