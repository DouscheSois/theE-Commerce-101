import React, { useContext } from "react";

import { StoreContext } from "../contextAPI/store";
import ShoppingCartAnimalCard from "./ShoppingCartAnimalCard";

const ShoppingCart = () => {
  const [cart, setCart] = useContext(StoreContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="shopping-cart-page">
      <h1 className="shopping-cart-page-title">Shopping Cart</h1>
      <div className="basket">
        {cart.map((animal) => (
          <ShoppingCartAnimalCard
            key={animal.id}
            name={animal.name}
            price={animal.price}
            desc={animal.desc}
            img={animal.img}
          />
        ))}
      </div>
      <h1 className="total-price">Total: ${totalPrice}</h1>
      <div className="payment">
        <div className="billing-form">
          <h1>Billing Address</h1>
          <input
            type="text"
            name="firstname"
            placeholder="First Name i.e. John"
          />
          <input
            type="text"
            name="lasttname"
            placeholder="Last Name i.e. Doe"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter Email i.e. JohnDoe@gmail.com"
          />
          <input
            type="text"
            name="address"
            placeholder="Enter Address i.e. 123 Way street"
          />
          <input
            type="text"
            name="city"
            placeholder="Enter City i.e. San Francisco"
          />
          <input
            type="number"
            name="zipcode"
            placeholder="Enter Zip Code i.e. 12345"
          />
          <input type="text" name="state" placeholder="Enter State i.e. CA" />
          <div className="checkbox">
            <input type="checkbox" id="same" />
            <label htmlFor="same">Same as Shipping Address</label>
          </div>
        </div>
        <div className="payment-form">
          <h1>Payment Information</h1>
          <label htmlFor="cards">Accepted Cards</label>
          <div className="icon-container">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-discover"></i>
          </div>
          <div className="card-container">
            <input
              type="text"
              name="cardname"
              placeholder="Enter Name i.e John Doe"
            />
            <input
              type="text"
              name="cardnumber"
              placeholder="Card Number i.e. 0000-0000-0000-0000"
            />
            <input
              type="text"
              name="expmonth"
              placeholder="Expiration Month i.e September"
            />
            <input
              type="text"
              name="expyear"
              placeholder="Expiration Year i.e. 2023"
            />
            <input
              type="text"
              name="cvv"
              placeholder="3-digit code (cvv) i.e. 123"
            />
          </div>
        </div>
      </div>
      <div className="submit">
        <button className="submit-button" type="button">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
