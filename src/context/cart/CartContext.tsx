import { createContext } from "react";
import { ProductAPI } from "../../types/types"

type CartItem = ProductAPI & {quantity: number};

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: ProductAPI) => void;
    decreaseProduct: (productCart: ProductAPI) => void;
    clearCart: () => void;
    removeProduct: (productId: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
