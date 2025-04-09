import { ProductAPI } from "./types";

export type CartItem = ProductAPI & { quantity: number };

export type CartState = CartItem[];

export type CartAction =
  | { type: "ADD_TO_CART"; payload: ProductAPI }
  | {type: "DECREASE_PRODUCT", payload: ProductAPI}
  | { type: "REMOVE_PRODUCT"; payload: { id: number } }
  | { type: "CLEAR_CART" };
