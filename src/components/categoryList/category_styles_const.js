import {Box, styled, Typography} from "@mui/material";

const StyledCard = styled(Box)({
    display: 'flex',
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginTop: 20,
    width: "10ch",
    height: "10ch",
    cursor: 'pointer',
    overflow: 'hidden',
    borderBottom: "3px solid #f44336",
    borderRadius: "10px",
    "&:hover":{
        opacity: 0.8,
        boxSizing: 'borderBox',
        zIndex: 1,
        transition: `all 0.45s ease`,
    },
});

const StyledTypography = styled(Typography)(({theme})=>({
    textAlign: 'center',
    color: "#f44336",
    fontSize: 15,
    height: "2.5ch",
}));

const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
});

export {
    StyledCard,
    StyledTypography,
    CardBox,
};