import { FaCartPlus } from "react-icons/fa";
import StarRating from "../../ui/StarRating";
import { capitalizeCategory } from "../../../utils/utils";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  category: string;
  addProductCart: () => void;
}

export default function ProductCard({
  image,
  title,
  price,
  rating,
  category,
  addProductCart,
}: ProductCardProps) {

  return (
    <li className='max-w-[300px] border border-border dark:border-border-dark rounded flex flex-col justify-between gap-3 sm:max-w-full'>
      <figure className='product-image'>
        <img src={image} alt={title} loading='lazy' className='rounded-t' />
        <figcaption className='sr-only'>{title}</figcaption>
      </figure>

      <section className='p-4 flex flex-col gap-5 border-t border-border dark:border-border-dark'>
        <header>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm text-primary font-medium'>{capitalizeCategory(category)}</span>
            <StarRating rating={rating} />
          </div>
          <h3 className='text-lg font-medium line-clamp-1'>{title}</h3>
        </header>
        <footer className='flex items-center justify-between'>
          <data value={price} className='text-lg font-bold'>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </data>
          <button
            className='px-3 py-2 rounded-sm bg-primary/90 text-white  flex items-center gap-4 hover:scale-110 hover:bg-primary transition-all duration-300'
            aria-label={`Add ${title} to cart`}
            onClick={addProductCart}
          >
            <span className='font-medium'>Add To</span>
            <FaCartPlus className='text-2xl' />
          </button>
        </footer>
      </section>
    </li>
  );
}
