import React, { useContext } from "react";
import { StoreContext } from "../../contextAPI/Store";

const ShoppingCartAnimalCard = ({ animal }) => {
  const [cart, setCart] = useContext(StoreContext);

  const removeFromCart = () => {
    setCart(cart.filter((item) => item.key !== animal.key));
  };
  return (
    <div className="animal-card" key={animal.key}>
      <h3>{animal.name}</h3>
      {animal.img}
      <p>{animal.desc}</p>
      <small className="price">${animal.price}</small>
      <button className="remove-animal" type="button" onClick={removeFromCart}>
        Remove
      </button>
    </div>
  );
};

export default ShoppingCartAnimalCard;
