// import { getProducts } from "../services/products.service";

import { Product } from "../models";
import ProductList from "../pages/Public/Inventory/components/ProductList";
import { getAllProducts } from "../services/products.service";

// export const filterProductsByCategory = async (category: string) => {
//   let products = await getProducts();
//   return products.map((product) => product.category === category);
// };

export const getProductList = async () => {
  let products = await getAllProducts();
  return products.data;
};
