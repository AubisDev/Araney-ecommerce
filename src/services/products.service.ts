import axios, { AxiosResponse } from "axios";
import { Product } from "../models";

const productsURL = "https://fakestoreapi.com/products";

export const getAllProducts = async () => {
  let products = await axios.get(productsURL);
  return products.data;
};

// export const getProductsByAmount = async (
//   amount: number
// ): Promise<Product[]> => {
//   let products = await getAllProducts();
//   return products.slice(amount);
// };

export const filterProductsByCategory = async (category: string) => {
  let products: Product[] = await axios.get(productsURL);
  return products.map((product: Product) => product.category === category);
};
