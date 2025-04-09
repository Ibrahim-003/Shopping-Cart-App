import { useCart } from "../../../context/cart/useCart";
import { useProductFilter } from "../../../context/filter/useProductFilter";
import { ProductAPI } from "../../../types/types";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { filteredProducts } = useProductFilter();
  const { addToCart } = useCart();

  const handleAddProductCart = (product: ProductAPI) => {
    addToCart(product);
  };

  return (
    <section className="w-full">
      <ul className='grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:justify-items-stretch lg:grid-cols-3'>
        {filteredProducts.slice(0, 9).map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            price={product.price}
            rating={product.rating}
            category={product.category}
            addProductCart={() => handleAddProductCart(product)}
          />
        ))}
      </ul>
    </section>
  );
}
