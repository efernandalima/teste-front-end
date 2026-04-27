import type { ProductsResponse } from "../types/product";

const API_URL =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";
const LOCAL_URL = "/produtos.json";

export async function getProducts(): Promise<ProductsResponse> {
  try {
    const response = await fetch(API_URL, { mode: "cors" });
    if (response.ok) return await response.json();
    throw new Error();
  } catch {
    const response = await fetch(LOCAL_URL);
    return await response.json();
  }
}
