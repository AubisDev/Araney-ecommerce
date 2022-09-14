export interface ProductInfo{
    id: number;
    name: string;
    title?: string;
    price: number;
    discount?: string;
    image: string;
    category: string;
    rating: {
        rate: number
    };
}

