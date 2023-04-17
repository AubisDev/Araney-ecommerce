import { Stack } from "@mui/material";
import HeaderBox from "./HeaderBox";
import { AboutBoxes, aboutTextAndTitles } from "../data/aboutMockData";

const AboutHeroSectionBoxes = () => {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 1, sm: 2, md: 4 },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {aboutTextAndTitles.map((box: AboutBoxes) => (
        <HeaderBox key={box.id} box={box} />
      ))}
    </Stack>
  );
};
export default AboutHeroSectionBoxes;
