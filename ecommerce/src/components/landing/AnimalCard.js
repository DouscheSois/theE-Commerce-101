import React, { useContext, useRef } from "react";

import { StoreContext } from "../../contextAPI/Store";

import ShoppingCart from "../../images/shopping-cart.png";

export const AnimalCard = ({ animal }) => {
  const [cart, setCart] = useContext(StoreContext);

  let button = useRef();

  const cartItem = {
    key: animal.id,
    name: animal.name,
    price: animal.price,
    desc: animal.desc,
    img: animal.img,
  };

  const addToCart = () => {
    setCart((state) => [...state, { ...cartItem }]);
    console.log(cartItem);

    if (button.current) {
      button.current.setAttribute("disabled", "disabled");
    }
  };

  return (
    <div className="animal-card" key={animal.id}>
      <h3>Meet {animal.name}!</h3>
      <small>{animal.id}</small>
      {animal.img}
      <p>{animal.desc}</p>
      <small className="price">${animal.price}</small>
      <button
        className="add-animal"
        ref={button}
        type="button"
        onClick={addToCart}
      >
        + <img src={ShoppingCart} alt="shopping-cart" />
      </button>
    </div>
  );
};
