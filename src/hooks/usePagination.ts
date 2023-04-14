import { useState } from "react";
import { Product } from "../models";

export const usePagination = (data: Product[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage - 1, maxPage));
  };

  const jumpToPage = (page: number) => {
    // const pageNumber = Math.max(1, page);
    setCurrentPage(page);
  };

  return {
    currentPage,
    maxPage,
    getPageData,
    nextPage,
    prevPage,
    jumpToPage,
    setCurrentPage,
  };
};
