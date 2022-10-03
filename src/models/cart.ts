import { ProductInfo } from "./products";

export interface CartInfo{
    item: ProductInfo;
    amount: number;
    size: string;
}