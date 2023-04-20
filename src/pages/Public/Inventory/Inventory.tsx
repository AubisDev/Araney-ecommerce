import { useEffect, useState } from "react";
import { usePagination } from "../../../hooks";
import { Box } from "@mui/material";
import { MenuList, ProductList } from "./components";
import { PaginationComponent } from "../../../components/PaginationComponent";
import { getCount, inventoryItemsPerPage } from "./utilities";
import { getAllProducts, getProductsByCategory } from "../../../services";
import { Product } from "../../../models";
import { useParams } from "react-router-dom";

function Inventory() {
  let { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const { currentPage, jumpToPage, getPageData } = usePagination(
    products,
    inventoryItemsPerPage
  );

  useEffect(() => {
    (async () => {
      let data;
      if (category) {
        data = await getProductsByCategory(category);
      } else {
        data = await getAllProducts();
      }
      setProducts(data);
    })();
  }, [category]);

  return (
    <Box
      sx={{
        width: "90vw",
        height: "auto",
        margin: "auto",
        mt: 6,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        py: 12,
      }}
    >
      <MenuList />
      <ProductList products={getPageData() as Product[]} />
      <PaginationComponent
        count={getCount(products, inventoryItemsPerPage)}
        page={currentPage}
        jumpToPage={jumpToPage}
      />
    </Box>
  );
}
export default Inventory;
