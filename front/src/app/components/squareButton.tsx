import { Button, Box } from "@mui/material";

const squareButton = ({ text }:{text: string}) => {

    const buttonStyle ={
    width: '300px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    background: '#101929'
    }

    return ( 
    <Button style={buttonStyle} variant="contained" color="primary">
      {text}
    </Button>
     );
}
 
export default squareButton;