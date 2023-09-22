import { createContext, useState } from "react";

const initialState = {};
export const ProductContext = createContext(initialState);
export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const contextValue = {
    cart,
    setCart,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
