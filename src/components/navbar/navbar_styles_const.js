import {createTheme} from "@mui/material/styles";
import {red} from "@mui/material/colors";
import {Box, styled, Toolbar} from "@mui/material";

const ThemeNavbar = createTheme({
    palette: {
        primary: {
            main: red[300],
        },
    },
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    background: "white",
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: "1px solid black",
});

const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
});

export {
    ThemeNavbar,
    StyledToolbar,
    MenuBox,
};