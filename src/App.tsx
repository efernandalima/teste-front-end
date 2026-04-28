import { useState, useCallback } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import BannerApoio from "./components/BannerApoio";
import BrandSection from "./components/BrandSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import useFetch from "./hooks/useFetch";
import { getProducts } from "./services/productService";
import type { Product, ProductsResponse } from "./types/product";

function App() {
  const { data, loading, error } = useFetch<ProductsResponse>(getProducts);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const handleVerProduto = useCallback(() => {
    const featured = data?.products?.[0];
    if (featured) setModalProduct(featured);
  }, [data]);

  const handleCloseModal = useCallback(() => {
    setModalProduct(null);
  }, []);

  const products = !loading && !error && data ? data.products : [];

  return (
    <>
      <Header />
      <main>
        <Banner onVerProduto={handleVerProduto} />
        <CategorySection />
        {products.length > 0 && <ProductSection products={products} showTabs={true} />}
        <BannerApoio />
        {products.length > 0 && <ProductSection products={products} showTabs={false} />}
        <BannerApoio />
        <BrandSection />
        {products.length > 0 && <ProductSection products={products} showTabs={false} />}
        <Newsletter />
      </main>
      <Footer />
      <ProductModal key={modalProduct?.productName ?? "closed"} product={modalProduct} onClose={handleCloseModal} />
    </>
  );
}

export default App;
