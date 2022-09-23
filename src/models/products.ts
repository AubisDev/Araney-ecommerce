export interface ProductInfo{
    category: string;
    description: string;
    discount?: string;
    id: number;
    image: string;
    name: string;
    price?: number;
    rating: {
        rate: number
    };
    title?: string;
    itemsQuantity: number;
    
}

export interface CartItemProps{
    items: ProductInfo;
    amount: number;
    size: string;
}
