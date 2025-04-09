import { ReactNode, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer, initialCartState } from "../../reducers/cartReducer";
import { ProductAPI } from "../../types/types";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (newProduct: ProductAPI) => {
    dispatch({ type: "ADD_TO_CART", payload: newProduct });
  };

  const decreaseProduct = (productCart: ProductAPI) => {
    dispatch({ type: "DECREASE_PRODUCT", payload: productCart });
  };

  const removeProduct = (productId: number) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: { id: productId } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        decreaseProduct,
        clearCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
