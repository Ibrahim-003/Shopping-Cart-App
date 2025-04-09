import { CartItem } from "../types/cart.types";

export const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return false;
};

export const capitalizeCategory = (category: string) => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export const getSubtotal = (products: CartItem[]) => {
  const total = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return Number(total.toFixed(2));
};
