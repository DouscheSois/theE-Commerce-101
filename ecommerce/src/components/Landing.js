import React from "react";

import Bear from "../images/bear.png";
import ShoppingCart from "../images/shopping-cart.png";
import Kangaroo from "../images/kangaroo.png";
import Lion from "../images/lion.png";
import Cow from "../images/cow.png";
import Koala from "../images/koala.png";
import Rabbit from "../images/rabbit.png";
import Llama from "../images/llama.png";
import Whale from "../images/whale.png";
import Panther from "../images/panther.png";
import Add from "../images/add.png";

const Landing = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Welcome to our online store!</h1>
      <p className="landing-page-desc">
        The world is changing and you can buy almost anything online so why not
        shop for a new pet with us.
      </p>
      <p className="landing-page-desc-1">Meet Our Family Below!</p>
      <div className="animal-cards">
        <div className="animal-card">
          <h3>Meet John!</h3>
          <img src={Bear} alt="bear" />
          <p>
            John is a Brown Bear. He is 15 years old. He likes to play ball and
            go fishing in California.
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
            go fishing in California.
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
            go fishing in California.
          </p>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Grandma!</h3>
          <img src={Cow} alt="cow" />
          <p>
            Grandma is a beautiful Cow. She is 30 years old. She likes hugs and
            likes to play with the young calves. She is still full of energy.
          </p>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Tommy!</h3>
          <img src={Koala} alt="koala" />
          <p>
            Tommy is a Brown Bear. He is 15 years old. He likes to play ball and
            go fishing in California.
          </p>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Dory!</h3>
          <img src={Rabbit} alt="rabbit" />
          <p>
            John is a Brown Bear. He is 15 years old. He likes to play ball and
            go fishing at the nearby rivers/lakes.
          </p>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="plus-card">
          <div className="add">
            <img src={Add} alt="add" />
          </div>
        </div>

        <div className="animal-card ">
          <h3>Meet Tina!</h3>
          <img src={Llama} alt="llama" />
          <p>
            John is a Brown Bear. He is 15 years old. He likes to play ball and
            go fishing at the nearby rivers/lakes.
          </p>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Maia!</h3>
          <img src={Whale} alt="whale" />
          <p>
            John is a Brown Bear. He is 15 years old. He likes to play ball and
            go fishing at the nearby rivers/lakes.
          </p>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Luke!</h3>
          <img src={Panther} alt="panther" />
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
