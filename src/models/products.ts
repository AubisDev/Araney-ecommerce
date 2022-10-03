export interface ProductInfo{
    category: string;
    description: string;
    discount?: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number
    };
    title?: string;
    itemsQuantity: number;
    
}

