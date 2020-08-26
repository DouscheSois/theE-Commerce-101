import React, { useState } from "react";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <StoreContext.Provider value={[cart, setCart]}>
      {children}
    </StoreContext.Provider>
  );
};
