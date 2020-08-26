import React, { useContext } from "react";

import { StoreContext } from "../contextAPI/store";

import ShoppingCart from "../images/shopping-cart.png";

export const AnimalCard = (animal) => {
  const [cart, setCart] = useContext(StoreContext);

  const addToCart = () => {
    const pet = {
      name: animal.name,
      price: animal.price,
      desc: animal.desc,
      img: animal.img,
    };
    setCart((state) => [...state, pet]);
    console.log("added");
  };

  return (
    <div className="animal-card">
      <h3>Meet {animal.name}!</h3>
      {animal.img}
      <p>{animal.desc}</p>
      <small className="price">${animal.price}</small>
      <button className="add-animal" type="button" onClick={addToCart}>
        + <img src={ShoppingCart} alt="shopp ing-cart" />
      </button>
    </div>
  );
};
