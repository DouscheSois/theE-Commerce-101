import React, { Fragment } from "react";

const ShoppingCartAnimalCard = (animal) => {
  return (
    <Fragment>
      <div className="animal-card">
        <h3>{animal.name}</h3>
        {animal.img}
        <p>{animal.desc}</p>
        <small className="price">${animal.price}</small>
        <button className="remove-animal" type="button">
          Remove
        </button>
      </div>
    </Fragment>
  );
};

export default ShoppingCartAnimalCard;
