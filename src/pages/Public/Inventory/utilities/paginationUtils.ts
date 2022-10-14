
export const inventoryItemsPerPage:number = 12;

export const inventoryUrl: string = "https://fakestoreapi.com/products";

export const getCount = (allProducts:any) =>  {
    return Math.ceil( Object.values(allProducts).length/inventoryItemsPerPage );
}