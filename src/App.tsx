import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { CartProvider } from "./context/cart/CartProvider";
import { FilterProvider } from "./context/filter/FilterProvider";
import productList from "./mocks/productsApiResults.json";

function App() {
  return (
    <>
      <FilterProvider products={productList.products}>
        <CartProvider>
          <Header />
          <Main />
          <Footer />
        </CartProvider>
      </FilterProvider>
    </>
  );
}

export default App;
