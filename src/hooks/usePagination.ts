import { useState } from 'react';




export const usePagination = ( data: any, itemsPerPage: number ) => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const maxPage = Math.ceil(data.length/itemsPerPage);

    const currentData = () => {
        const startIndex = ( currentPage - 1 ) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex)
    }

    const nextPage = () => {    
        setCurrentPage( currentPage => Math.min( currentPage + 1, maxPage))
    }

    const prevPage = () => {
        setCurrentPage( currentPage => Math.min( currentPage - 1, maxPage))
    }

    const jumpToPage = (page:number) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage( currentPage => Math.min( pageNumber + 1, maxPage))
    }

    return {
        currentPage,
        maxPage,
        currentData,
        nextPage,
        prevPage,
        jumpToPage
    }
}