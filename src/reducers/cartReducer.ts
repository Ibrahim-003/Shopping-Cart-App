import { CartAction, CartState } from "../types/cart.types";

export const initialCartState: CartState = [];

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = action.payload;
      const indexProduct = state.findIndex(
        (productCart) => productCart.id === id
      );

      if (indexProduct >= 0) {
        const newCart = structuredClone(state);
        newCart[indexProduct].quantity += 1;
        return newCart;
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "DECREASE_PRODUCT": {
      const { id } = action.payload;
      const indexProduct = state.findIndex(
        (productCart) => productCart.id === id
      );

      if (indexProduct >= 0) {
        const newCart = structuredClone(state);
        if (newCart[indexProduct].quantity > 1) {
          newCart[indexProduct].quantity -= 1;
          return newCart;
        } else {
          // Si la cantidad llega a 1, eliminamos el producto del carrito
          return state.filter((product) => product.id !== id);
        }
      }
      return state; // Si no se encuentra el producto, devolvemos el estado sin cambios
    }

    case "REMOVE_PRODUCT": {
      const { id } = action.payload;
      return state.filter((product) => product.id !== id);
    }

    case "CLEAR_CART": {
      return initialCartState;
    }

    default:
      return state;
  }
};
