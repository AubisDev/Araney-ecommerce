import { Button } from "@mui/material"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../../models";
import { AppStore } from "../../../../redux/store";

const AboutJoinUsButton = () => {
    const navigate = useNavigate();
    const user = useSelector( (store:AppStore) => store.user);
  
    const handleJoinUsButtonClick = () => {
      user.username ? navigate(`../${PublicRoutes.HOME}`, { replace: true} )
                    : navigate(`../${PublicRoutes.REGISTER}`, { replace: true} ); 
    }
    return (
        <Button
            variant="contained"
            color='warning'
            sx={{ m: 4, py: 1, px: 2 }}
            onClick={handleJoinUsButtonClick}
        >
            Click here to join us!
        </Button>
    )
}
export default AboutJoinUsButton