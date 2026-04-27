import Header from "./components/Header";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import BannerApoio from "./components/BannerApoio";
import useFetch from "./hooks/useFetch";
import { getProducts } from "./services/productService";
import type { ProductsResponse } from "./types/product";

function App() {
  const { data, loading, error } = useFetch<ProductsResponse>(getProducts);

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategorySection />
        {!loading && !error && data && (
          <ProductSection products={data.products} />
        )}
        <BannerApoio />
      </main>
    </>
  );
}

export default App;
