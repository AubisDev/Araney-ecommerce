import { Pagination, Stack } from "@mui/material";

interface PaginationProps {
  count: number;
  page: number;
  jumpToPage: (page: number) => void;
}

export const PaginationComponent = ({
  count,
  page,
  jumpToPage,
}: PaginationProps) => {
  const handlePageJump = (evt: React.ChangeEvent<unknown>, page: number) => {
    jumpToPage(page);
    window.scroll(0, 0);
  };
  return (
    <Stack
      spacing={2}
      sx={{
        height: "32px",
        width: "100%",
        position: "absolute",
        bottom: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pagination
        count={count}
        color="primary"
        size="large"
        shape="rounded"
        variant="outlined"
        page={page}
        hideNextButton={true}
        hidePrevButton={true}
        onChange={(evt: React.ChangeEvent<any>) =>
          handlePageJump(evt, Number(evt.target.innerText))
        }
      />
    </Stack>
  );
};
export default PaginationComponent;
