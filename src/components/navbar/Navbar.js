import React, {useState} from "react";
import {
    AppBar,
    Box,
    Drawer,
    TextField,
    styled,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemButton,
} from "@mui/material";
import {
    red,
    blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import StoreIcon from '@mui/icons-material/Store';
import CameraIcon from '@mui/icons-material/Camera';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import WebIcon from '@mui/icons-material/Web';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const Navbar = () => {

    const theme = createTheme({
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

    const MenuItems = [
        {Icon: <StoreIcon />, Name: "Store", Link: '#'},
        {Icon: <CameraIcon />, Name: "Look", Link: '#'},
        {Icon: <LibraryMusicIcon/>, Name: "Guitars", Link: '#'},
        {Icon: <WebIcon/>, Name: "WEB", Link: '#'},
        {Icon: <RssFeedIcon />, Name: "Subscribe", Link: '#'},
    ];

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
        <AppBar
            position={"sticky"}
            elevation={0}
        >
            <StyledToolbar>
                <Box flex={{
                    xs: 25,
                    md: 1,
                }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'DM Serif Display, serif',
                        }}
                        variant={"h5"}
                        color={red[500]}
                        marginRight={3}
                    >
                        KISCEAN
                    </Typography>
                </Box>
                <MenuBox flex={1}
                    sx={{
                    display: {
                        xs: "none",
                        md: "flex",
                    },
                }}>
                    {MenuItems.map((item)=>(
                        <Typography
                            variant={"body2"}
                            color={blueGrey[500]}
                            marginRight={3}>
                            {item.Name}
                        </Typography>
                    ))}
                </MenuBox>
                <Box
                    flex={1}
                    marginLeft={2}>
                    <ThemeProvider theme={theme}>
                        <TextField
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "flex",
                                },
                                width: "45ch",
                            }}
                            label="Search"
                            defaultValue="Search"
                            size="small"
                        />
                        <BlurOnIcon sx={{
                            color:red[400],
                            display: {
                                xs: "flex",
                                md: "none"
                            },
                            cursor: 'pointer'}}
                            onClick={() => setOpenMenu(!openMenu)}
                        />
                    </ThemeProvider>
                </Box>
            </StyledToolbar>
            <Drawer
                anchor={'right'}
                open={openMenu}
                onClose={() => setOpenMenu(!openMenu)}
            >
                <Box
                    width={"35ch"}
                >
                <List sx={{
                    padding: 0,
                }}>
                    <Box sx={{
                         background: red[500],
                         }}
                         height={"7ch"}
                         display={"flex"}
                         marginBottom={5}
                         borderBottom={"1px solid black"}
                         justifyContent={"center"}
                    >
                        <Typography
                            variant={"h6"}
                            color={"white"}
                            marginTop={1.5}
                        >
                            SITE MENU
                        </Typography>
                    </Box>
                    <Box
                        flex={0}
                        textAlign={"center"}
                        marginBottom={2}
                    >
                        <ThemeProvider theme={theme}>
                            <TextField
                                sx={{
                                    width: "30ch",
                                }}
                                label="Search"
                                defaultValue="Search"
                                size="small"
                            />
                        </ThemeProvider>
                    </Box>
                    <ListItem
                        sx={{
                            flexDirection: "column",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                        alignItems={"flex-start"}
                    >
                        {MenuItems.map((item)=>(
                            <ListItemButton>
                                <Typography
                                    color={blueGrey[700]}
                                    marginTop={0.7}
                                    marginRight={1.5}
                                >
                                    {item.Icon}
                                </Typography>
                                <Typography
                                    variant={"body1"}
                                    color={blueGrey[700]}

                                >
                                    {item.Name}
                                </Typography>
                            </ListItemButton>
                        ))}
                    </ListItem>
                </List>

                </Box>
            </Drawer>
        </AppBar>
        </>
    );
};

export default Navbar;