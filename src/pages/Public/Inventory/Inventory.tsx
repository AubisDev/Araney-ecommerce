import { useEffect, useState } from "react";
import { usePagination } from "../../../hooks/usePagination";
import { Box } from "@mui/material";
import MenuList from "./components/MenuList";
import PaginationComponent from "../../../components/PaginationComponent";
import { getCount, inventoryItemsPerPage } from "./utilities/paginationUtils";
import { getAllProducts } from "../../../services/products.service";
import ProductList from "./components/ProductList";
import { Product } from "../../../models";

function Inventory() {
  const [products, setProducts] = useState<Product[]>([]);
  const { currentPage, jumpToPage, getPageData } = usePagination(
    products,
    inventoryItemsPerPage
  );

  useEffect(() => {
    (async () => {
      let data = await getAllProducts();
      setProducts(data);
    })();
  }, []);

  return (
    <Box
      sx={{
        width: "90vw",
        height: "auto",
        margin: "auto",
        mt: 12,
        display: "flex",
        flexDirection: "row",
        position: "relative",
        py: 12,
      }}
    >
      <MenuList />
      <ProductList products={getPageData()} />
      <PaginationComponent
        count={getCount(products, inventoryItemsPerPage)}
        page={currentPage}
        jumpToPage={jumpToPage}
      />
    </Box>
  );
}
export default Inventory;
