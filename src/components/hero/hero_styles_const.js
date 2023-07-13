import {Box, styled, Typography} from "@mui/material";
import {red} from "@mui/material/colors";

const StyledCard = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginTop: 20,
    cursor: 'pointer',
    borderRadius: 5,
    [theme.breakpoints.up("md")]:{
        height: 400,
    },
    [theme.breakpoints.down("md")]:{
        height: 200,
    },
    "&:hover":{
        opacity: 0.8,
        boxSizing: 'borderBox',
        zIndex: 1,
        transition: `all 0.45s ease`,
    },
}));

const StyledTypography = styled(Typography)(({theme})=>({
    textAlign: 'center',
    color: "white",
    background: red[400],
    fontSize: 18,
    textTransform: "uppercase",
    height: "2.5ch"
}));

const StyledWrapper = styled(Box)(({theme})=>({
    [theme.breakpoints.up("md")]:{
        paddingTop: "143%",
        width: "80%",
    },
    [theme.breakpoints.down("md")]:{
        paddingTop: "28%",
        width: "90%",
        opacity: 0.8,
    },
}));

export {
    StyledCard,
    StyledTypography,
    StyledWrapper,
} ;
