
export const inventoryItemsPerPage:number = 12;
export const CheckoutItemPerPage: number = 3;

export const inventoryUrl: string = "https://fakestoreapi.com/products";

export const getCount = (data:any, itemPerPage: number) =>  {
    return Math.ceil( Object.values(data).length/itemPerPage );
}