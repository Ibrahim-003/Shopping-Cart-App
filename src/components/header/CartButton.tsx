import { BsCart3 } from "react-icons/bs";
import { useCart } from "../../context/cart/useCart";

interface CartButtonProps {
  onClick: () => void;
}

export default function CartButton({onClick}: CartButtonProps) {
  const {cart} = useCart();
  return (
    <button className='relative bg-stone-50 dark:bg-background p-[10px] inset-ring inset-ring-stone-300 rounded-full hover:bg-stone-100 dark:inset-ring-white/20 dark:hover:bg-white/20' onClick={onClick}>
      <BsCart3 className='text-zinc-800 text-lg dark:text-white' />
      {cart.length > 0 && (
        <span className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white font-medium text-sm rounded-full flex items-center justify-center animate-bounce'>
          {cart.length}
        </span>
      )}
    </button>
  );
}
