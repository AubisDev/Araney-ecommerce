import { Product } from "./products";

export interface CartInfo {
  item: Product;
  amount: number;
  size: string;
}
