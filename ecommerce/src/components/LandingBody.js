import React from "react";

import Bear from "../images/bear.jpg";
import ShoppingCart from "../images/shopping-cart.png";
import Kangaroo from "../images/kangaroo.png";
import Jaguar from "../images/jaguar.jpg";
import Cow from "../images/cow.png";
import Koala from "../images/koala.png";
import Rabbit from "../images/rabbit.jpg";
import Llama from "../images/llama.png";
import Whale from "../images/whale.jpg";
import Cheetah from "../images/cheetah.jpg";
import Dog from "../images/dog.jpg";
import Zebra from "../images/zebra.jpg";
import Add from "../images/add.png";

const LandingBody = () => {
  return (
    <div className="landing-body">
      <div className="animal-cards">
        <div className="animal-card">
          <h3>Meet John!</h3>
          <img className="animal" src={Bear} alt="bear" />
          <p>
            John is a Brown Bear. He is 15 years old. He likes to play ball and
            go fishing in at the California rivers.
          </p>
          <small className="price">$22,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Steve!</h3>
          <img className="animal" src={Jaguar} alt="jaguar" />
          <p>
            Steve is a good Jaguar. He is 6 years old. He likes to play fetch
            and play cop and robbers in his spare time.
          </p>
          <small className="price">$25,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Ronald!</h3>
          <img className="animal" src={Dog} alt="dog" />
          <p>
            Steve is a good Dog. He is 4 years old. He likes to get on the couch
            and play in the mud whenever possible.
          </p>
          <small className="price">$25,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Aussie!</h3>
          <img className="animal" src={Kangaroo} alt="kangaroo" />
          <p>
            Aussie is a Kangaroo. She is 4 years old. She likes to dance and go
            to the Sydney Opera House.
          </p>
          <small className="price">$6,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Grandma!</h3>
          <img className="animal" src={Cow} alt="cow" />
          <p>
            Grandma is a beautiful Cow. She is 30 years old. She likes hugs and
            likes to play with the young calves. She is still full of energy.
          </p>
          <small className="price">$3,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Tommy!</h3>
          <img className="animal" src={Koala} alt="koala" />
          <p>
            Tommy is a Koala Bear. He is 8 years old. He likes to climb trees
            and move in slow motion to the music.
          </p>
          <small className="price">$5,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Dory!</h3>
          <img className="animal" src={Rabbit} alt="rabbit" />
          <p>
            Dory is a Rabbit. She is 4 years old. She likes to to healthy and
            jump around when the music is on.
          </p>
          <small className="price">$1,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="plus-card">
          <div className="add">
            <img className="animal" src={Add} alt="add" />
          </div>
        </div>

        <div className="animal-card ">
          <h3>Meet Tina!</h3>
          <img className="animal" src={Llama} alt="llama" />
          <p>
            Tina is a Llama. She is 12 years old. She likes to go on hikes and
            likes to compete in spitting contests.
          </p>
          <small className="price">$7,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Maia!</h3>
          <img className="animal" src={Whale} alt="whale" />
          <p>
            Maia is a Blue Whale. She is 45 years old. She likes to swim and
            follow cruises around the world.
          </p>
          <small className="price">$120,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Jerry!</h3>
          <img className="animal" src={Zebra} alt="zebra" />
          <p>
            Jerry is a Zebra. He is 10 years old. He likes to paint and be in
            nature relaxing eating grass.
          </p>
          <small className="price">$120,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>

        <div className="animal-card">
          <h3>Meet Luke!</h3>
          <img className="animal" src={Cheetah} alt="cheetah" />
          <p>
            Luke is a Cheetah. He is 4 years old. He likes to play tag and
            wrestle the other animals, even Maia!
          </p>
          <small className="price">$10,000</small>
          <button className="add-animal" type="button">
            + <img src={ShoppingCart} alt="shopping-cart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
