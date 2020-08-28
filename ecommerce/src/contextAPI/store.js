import React, { createContext, useState } from "react";
import Reducer from "./Reducer";

const initialState = {
  cart: [],
};

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <StoreContext.Provider value={[cart, setCart]}>
      {children}
    </StoreContext.Provider>
  );
};
