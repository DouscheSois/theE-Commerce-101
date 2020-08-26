import React, { useContext } from "react";

import { StoreContext } from "../contextAPI/store";

import Bear from "../images/bear.jpg";

const ShoppingCart = () => {
  const [cart, setCart] = useContext(StoreContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="shopping-cart-page">
      <h1 className="shopping-cart-page-title">Shopping Cart</h1>
      <div className="basket">
        <div className="animal-card">
          <h3>Meet John!</h3>
          <img className="animal" src={Bear} alt="bear" />
          <p>
            John is a Brown Bear. He is 15 years old. He likes to play ball and
            go fishing at the Californian rivers.
          </p>
          <button className="remove-animal" type="button">
            Remove
          </button>
        </div>
      </div>
      <div className="total">
        <div className="total-desc">
          <h1>You've selected John, Congrats!</h1>
          <hr />
          <h1>Total:</h1>
        </div>
        <div className="total-amount">
          <h1>$22,000</h1>
          <hr />
          <h1>${totalPrice}</h1>
        </div>
      </div>
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
            <label for="same">Same as Shipping Address</label>
          </div>
        </div>
        <div className="payment-form">
          <h1>Payment Information</h1>
          <label for="cards">Accepted Cards</label>
          <div className="icon-container">
            <i class="fab fa-cc-visa"></i>
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
