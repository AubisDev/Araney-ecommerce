
interface PageJumpProps{
    event:React.ChangeEvent<any>;
    page:number;
    setPage: (page:number) => void;
    jumpToPage: (page:number) => void;
}

export const handlePageJump = ({ event , page,setPage, jumpToPage }:PageJumpProps) => {
    setPage( page );
    jumpToPage( page );
};