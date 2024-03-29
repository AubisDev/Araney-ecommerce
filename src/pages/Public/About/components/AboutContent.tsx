import { Box, Typography, Stack } from "@mui/material";
import img1 from "../../../../assets/about-img1.webp";
import img2 from "../../../../assets/about-img2.webp";
import img3 from "../../../../assets/about-img3.webp";

const AboutContent = () => {
  return (
    <Box
      sx={{
        width: "80vw",
        minHeight: "100vh",
        height: "auto",
        margin: "auto",
        color: "black",
        p: 5,
      }}
    >
      <Typography
        sx={{ width: { xs: "90%", sm: "75%", md: "60%" }, p: { xs: 0, sm: 5 } }}
        m="auto"
        variant="body1"
        align="justify"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Stack
        direction="column"
        sx={{
          mt: 6,
          py: 6,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          mb={8}
          fontWeight={600}
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          align="justify"
          color="#636363"
          sx={{
            fontSize: { xs: "1.25em", sm: "1.5em", md: "2.125eem" },
            pl: { xs: 0, md: 3 },
          }}
        >
          Ultrices gravida dictum fusce ut placerat
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={img1}
            alt="about us image create"
            sx={{
              width: { xs: "80%", md: "500px" },
              borderRadius: "10px",
              m: { xs: "auto", md: 0 },
            }}
          />
          <Typography
            variant="body1"
            width="30%"
            display="flex"
            alignItems="center"
            align="justify"
            pl={3}
            m="auto"
            sx={{
              width: { xs: "90%", sm: "75%", md: "30%" },
              m: { xs: "auto", md: 0 },
              pt: { xs: "1em", md: 0 },
            }}
          >
            Nibh mauris cursus mattis molestie. Tempor commodo ullamcorper a
            lacus vestibulum. Maecenas sed enim ut sem viverra aliquet. Vel
            fringilla est ullamcorper eget nulla facilisi etiam dignissim. Odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            phasellus. Dictum at tempor commodo ullamcorper.{" "}
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="column"
        sx={{ mt: 6, py: 6, display: "flex", justifyContent: "center" }}
      >
        <Typography
          variant="h4"
          mb={6}
          fontWeight={600}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#636363"
          sx={{
            fontSize: { xs: "1.25em", sm: "1.5em", md: "2.125eem" },
            pl: { xs: 0, md: 3 },
            textAlign: "center",
          }}
        >
          Amet mauris commodo quis imperdiet massa tincidunt nunc{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            display="flex"
            alignItems="center"
            align="justify"
            sx={{
              width: { xs: "90%", sm: "75%", md: "30%" },
              m: { xs: "auto", md: 0 },
              pr: { xs: 0, md: 3 },
              pt: { xs: "1em", md: 0 },
            }}
          >
            Nibh mauris cursus mattis molestie. Tempor commodo ullamcorper a
            lacus vestibulum. Maecenas sed enim ut sem viverra aliquet. Vel
            fringilla est ullamcorper eget nulla facilisi etiam dignissim. Odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            phasellus. Dictum at tempor commodo ullamcorper. acilisis mauris sit
            amet massa vitae tortor condimentum. Porttitor lacus luctus accumsan
            tortor posuere ac ut.{" "}
          </Typography>
          <Box
            component="img"
            src={img2}
            alt="about us image create"
            sx={{
              width: { xs: "80%", md: "400px" },
              borderRadius: "10px",
              m: { xs: "auto", md: 5 },
            }}
          />
        </Box>
      </Stack>
      <Stack
        direction="column"
        sx={{ mt: 6, py: 6, display: "flex", justifyContent: "center" }}
      >
        <Typography
          variant="h4"
          ml={-3}
          mb={6}
          fontWeight={600}
          display="flex"
          alignItems="center"
          justifyContent="center"
          align="justify"
          color="#636363"
          sx={{
            fontSize: { xs: "1.25em", sm: "1.5em", md: "2.125eem" },
            pl: { xs: 0, md: 3 },
            textAlign: "center",
            width: { xs: "80%", md: "auto" },
            mx: "auto",
          }}
        >
          Fermentum leo vel orci porta non pulvinar neque laoreet
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={img3}
            alt="about us image create"
            sx={{
              height: { xs: "auto", md: "400px" },
              borderRadius: "10px",
              margin: "auto",
              width: { xs: "80%", md: "600px" },
            }}
          />
          <Typography
            variant="body1"
            display="flex"
            alignItems="center"
            align="justify"
            sx={{
              width: { xs: "90%", sm: "75%", md: "60%" },
              m: { xs: "auto", md: 0 },
              pr: { xs: 0, md: 3 },
              pt: { xs: "1em", md: "1em" },
            }}
          >
            Sit amet nisl suscipit adipiscing bibendum est. Ipsum dolor sit amet
            consectetur adipiscing elit pellentesque habitant morbi. Ipsum
            faucibus vitae aliquet nec ullamcorper. Morbi tristique senectus et
            netus et malesuada fames ac turpis. At quis risus sed vulputate odio
            ut. Ut tristique et egestas quis ipsum suspendisse. Etiam sit amet
            nisl purus in. Volutpat diam ut venenatis tellus in metus vulputate
            eu. Interdum velit euismod in pellentesque massa placerat duis
            ultricies. Parturient montes nascetur ridiculus mus mauris vitae
            ultricies. Eu tincidunt tortor aliquam nulla facilisi cras fermentum
            odio.{" "}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
export default AboutContent;
