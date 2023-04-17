import { Typography, Stack } from "@mui/material";

interface HeaderBoxProps {
  box: {
    id: number;
    text: string;
    title: string;
  };
}

const headerBox = ({ box }: HeaderBoxProps) => {
  return (
    <Stack
      sx={{
        color: "white",
        width: 200,
        height: { xs: 65, sm: 80 },
        p: 2,
        border: 1,
        borderColor: "rgba(255,255,255,.75)",
        borderRadius: 3,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        height="50%"
        color="warning.light"
        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
      >
        {box.title}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        height="50%"
        fontFamily="Dosis"
        sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }}
      >
        {box.text}
      </Typography>
    </Stack>
  );
};
export default headerBox;
