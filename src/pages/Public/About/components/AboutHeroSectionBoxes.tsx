import { Stack } from "@mui/material"
import HeaderBox from "./HeaderBox"
import { AboutBoxes, aboutTextAndTitles } from '../data/aboutMockData';

const AboutHeroSectionBoxes = () => {
    return (
        <Stack direction='row' spacing={4} >
            {
                aboutTextAndTitles.map( (box: AboutBoxes) => (
                    <HeaderBox key={box.id} box={box} />
                ))
            } 
        </Stack>
    )
}
export default AboutHeroSectionBoxes