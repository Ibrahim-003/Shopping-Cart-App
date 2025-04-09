import ProductFilter from "./products/ProducFilter";
import ProductList from "./products/ProductList";

export default function Main() {
  return (
    <main className='pb-10 flex flex-col gap-5'>
      <section className='max-w-[1280px] mx-auto px-8'>
        <h1 className='text-3xl text-center text-indigo-400 font-bold mb-2'>Our Products</h1>
        <p className='text-center mb-8'>
          Discover our carefully curated collection of high-quality products
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <ProductFilter />
          <ProductList />
        </div>
      </section>
    </main>
  );
}
