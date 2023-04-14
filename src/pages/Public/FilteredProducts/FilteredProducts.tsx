import { Box, MenuList } from "@mui/material";
import { url } from "inspector";
import { useState } from "react";
import PaginationComponent from "../../../components/PaginationComponent";
import { useFetch } from "../../../hooks";
import { handlePageJump } from "../../../utilities/paginationUtils";
import {
  inventoryItemsPerPage,
  getCount,
} from "../Inventory/utilities/paginationUtils";
import Product from "../Product/Product";
import { useParams } from "react-router-dom";

const FilteredProducts = () => {
  const [page, setPage] = useState<number>(1);
  let { category } = useParams();
  console.log(category);
  // const products = filterProductsByCategory();
  // const { jumpToPage, currentData } = usePagination(
  //   allProducts,
  //   inventoryItemsPerPage
  // );
  // const [filteredProducts, setFilteredProducts] = useState(currentData());

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
      {/* <FilteredProducts products={currentData()} />
          <PaginationComponent
            count={getCount(allProducts, inventoryItemsPerPage)}
            page={page}
            handlePageJump={(event) =>
              handlePageJump({ event, page, setPage, jumpToPage })
            }
          /> */}
    </Box>
  );
};
export default FilteredProducts;
