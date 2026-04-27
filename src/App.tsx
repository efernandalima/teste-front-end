import useFetch from "./hooks/useFetch";
import { getProducts } from "./services/productService";
import type { ProductsResponse } from "./types/product";

function App() {
  const { data, loading, error } = useFetch<ProductsResponse>(getProducts);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <main>
      <h1>Econverse</h1>
      {data?.products.map((product, index) => (
        <div key={index}>
          <p>{product.productName}</p>
          <p>R$ {product.price}</p>
        </div>
      ))}
    </main>
  );
}

export default App;
