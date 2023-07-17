import React from "react";
import {
    Box, CardMedia,
    Container, List, ListItemButton, ListItemIcon, ListItemText,
    Typography
} from "@mui/material";
import Category from "../categoryList/Category";
import guitars from '../../static/guitars.png';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const DetailsPage = () => {
    return (
        <Container>
            <Category />
            <Typography
                variant={"h3"}
                align={"center"}
                mt={4}
            >
                Title of guitars
            </Typography>
            <Typography
                variant={"body2"}
                align={"center"}
                color={"grey"}
                p={4}
            >
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            </Typography>
            <Typography
                variant={"body1"}
                align={"center"}
                m={2}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Box
               sx={{
                   display:'flex',
                   justifyContent: "center"
               }}
            >
                <CardMedia
                    sx={{
                        height: "500px",
                        width: "500px",
                    }}
                    component={"img"}
                    image={guitars}
                    alt={"guitars"}
                />
            </Box>
            <Typography
                variant={"body1"}
                align={"center"}
                m={2}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography
                variant={"h6"}
                align={"center"}
                m={2}
            >
                Characteristics
            </Typography>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <DoubleArrowIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Neck"} />
                </ListItemButton>
            </List>
        </Container>
    );
};

export default DetailsPage;