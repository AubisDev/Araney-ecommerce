import { Typography, Box } from "@mui/material";

const AboutHeroSectionTitle = () => {
  return (
    <Typography
      py={4}
      align="center"
      sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3.75rem" } }}
    >
      Are you what we're looking for at{" "}
      <Box component="span" sx={{ color: "#ff9800", fontWeight: 600 }}>
        Araney's
      </Box>
      ?
    </Typography>
  );
};
export default AboutHeroSectionTitle;
