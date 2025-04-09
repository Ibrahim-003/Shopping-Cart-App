import { useCart } from "../../context/cart/useCart";
import { IoClose } from "react-icons/io5";
import {
  FaRegCreditCard,
  FaShoppingBag,
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { getSubtotal } from "../../utils/utils";

interface CartProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function CartDrawer({ onClick, isOpen }: CartProps) {
  const { addToCart, decreaseProduct, removeProduct, clearCart, cart } =
    useCart();
  return (
    <aside
      className={`fixed top-0 right-0 z-1000 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 h-full w-full bg-white dark:bg-background-dark border-l border-border dark:border-border-dark sm:w-1/2 sm:max-w-[450px] flex flex-col justify-between`}
    >
      <header className='flex items-center justify-between text-white bg-primary p-4'>
        <h2 className='text-xl font-semibold'>Your Cart</h2>
        <div className='flex flex-row-reverse gap-4'>
          <button
            className='inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-white/20 transition-colors duration-400'
            onClick={onClick}
          >
            <IoClose />
          </button>
        </div>
      </header>
      {cart.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-full gap-2 px-10'>
          <div>
            <FaShoppingBag className='text-6xl text-muted-foreground' />
          </div>
          <h3 className='text-lg font-medium'>Your cart is empty</h3>
          <p className='text-muted-foreground text-center'>
            Looks like you haven't added any products to your cart yet.
          </p>
          <button
            className='bg-primary text-white font-medium px-4 py-2 rounded-md'
            onClick={onClick}
          >
            Continue shopping
          </button>
        </div>
      ) : (
        <>
          <ul className='relative px-4 py-12 grid gap-3 overflow-auto'>
            {cart.length > 0 && (
              <button
                className='absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/80 text-white hover:bg-primary transition-colors duration-400'
                onClick={() => clearCart()}
              >
                <FaTrash />
              </button>
            )}
            {cart &&
              cart.map((product) => (
                <li
                  className='relative pb-4 border-b border-border dark:border-border-dark flex gap-4'
                  key={product.id}
                >
                  <figure>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      width={60}
                    />
                  </figure>
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-medium line-clamp-1'>
                      {product.title}
                    </h3>
                    <p className='text-md text-primary font-semibold'>
                      ${product.price}
                    </p>
                    <div className='flex items-center gap-3'>
                      <button
                        className='p-2 border border-border dark:border-border-dark hover:bg-muted dark:hover:bg-white/20 rounded-full '
                        onClick={() => decreaseProduct(product)}
                      >
                        <FaMinus className='text-sm' />
                      </button>
                      <span className='text-lg font-medium'>
                        {product.quantity}
                      </span>
                      <button
                        className='p-2 border border-border dark:border-border-dark hover:bg-muted dark:hover:bg-white/20 rounded-full '
                        onClick={() => addToCart(product)}
                      >
                        <FaPlus className='text-sm' />
                      </button>
                    </div>
                    <button
                      className='absolute right-4 bottom-4 p-2 rounded-md hover:bg-red-200 hover:text-red-500 transition-colors duration-300 dark:hover:bg-red-500/20'
                      onClick={() => removeProduct(product.id)}
                    >
                      <IoClose className='text-xl' />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
          <div className='border-t border-border dark:border-border-dark p-4'>
            <div className='flex items-center justify-between font-medium'>
              <span>Subtotal</span>
              <span>${getSubtotal(cart)}</span>
            </div>
            <div className='mt-4 flex items-center justify-between text-muted-foreground'>
              <span className=''>Shipping costs</span>
              <span>calculated at checkout</span>
            </div>
            <div className='mt-4 pt-2 border-t border-border dark:border-border-dark flex items-center justify-between text-xl font-bold'>
              <span>Total</span>
              <span>${getSubtotal(cart)}</span>
            </div>
            <button className='w-full mt-4 bg-primary/80 dark:bg-primary text-white font-medium rounded-md px-3 py-2'>
              <span>Checkout</span>
              <FaRegCreditCard className='inline-block ml-2' />
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
