import { Button } from '@mui/material';
import styled from '@emotion/styled';

const NavbarButton = styled(Button)`
    background-color: transparent;
    color: #fff;
    padding: 6px 12px;
    border: 1px solid #fff;
    &:hover{
        background-color: 'black'
    }
`
interface NavButtonProps{
    text:string;
}

export const NavButton = ({text}:NavButtonProps) => {
  return (
    <NavbarButton color="inherit" size="large">{text}</NavbarButton>
  )
}
