import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"

interface SizeOptionsProps{
    handleSizeChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const SizeOptions = ({handleSizeChange}:SizeOptionsProps) => {
    return (
        <FormControl  sx={{ width:"80%", display:"flex", justifyContent:'center', alignContent:"center", margin:"0 auto" }}>
            <FormLabel id="row-radio-buttons-group-label" sx={{ color:"inherit", fontSize:18, textAlign:"center" }}>
                Size
            </FormLabel>
            <RadioGroup 
                onChange={(event) => handleSizeChange( event )}
                row
                aria-labelledby="row-radio-buttons-group-label"
                name="radio-buttons-group"
                sx={{ display:"flex", justifyContent:"center"}}
                defaultValue='XS'
            >
                <FormControlLabel value="XS" control={<Radio color='default' />} label="XS" />
                <FormControlLabel value="S" control={<Radio color='default' />} label="S" />
                <FormControlLabel value="M" control={<Radio color='default' />} label="M" />
                <FormControlLabel value="L" control={<Radio color='default' />} label="L" />
            </RadioGroup>
      </FormControl>
    )
}
export default SizeOptions