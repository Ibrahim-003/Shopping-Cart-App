import { useState, useCallback } from "react";
import ThemeButton from "./ThemeButton";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";
import Logo from "./Logo";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header
        role='banner'
        className='sticky top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      >
        <div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
          <Logo />
          <div className='flex items-center gap-4'>
            <ThemeButton />
            <CartButton
              onClick={toggleCart}
              aria-label={isCartOpen ? "Cerrar carrito" : "Abrir carrito"}
              aria-expanded={isCartOpen}
            />
          </div>
        </div>
      </header>
      <CartDrawer
        isOpen={isCartOpen}
        onClick={toggleCart}
      />
    </>
  );
}
