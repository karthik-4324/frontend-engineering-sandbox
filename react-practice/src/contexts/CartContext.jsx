import { createContext, useContext, useReducer } from "react";
import CartRedcuer from "../Reducers/CartRedcuer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartRedcuer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
