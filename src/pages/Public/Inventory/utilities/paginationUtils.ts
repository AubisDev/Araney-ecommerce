export const inventoryItemsPerPage: number = 12;
export const CheckoutItemPerPage: number = 3;

export const getCount = (data: any, itemPerPage: number) => {
  return Math.ceil(data.length / itemPerPage);
};
