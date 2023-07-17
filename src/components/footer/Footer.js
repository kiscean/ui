import React from "react";
import {
    Box,
    Container, Stack, Typography
} from "@mui/material";
import MenuItems from "../navbar/navbar_menu_const";
import {MenuBox} from "../navbar/navbar_styles_const";

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: "#871613",
                height: "200px",
            }}
        >
            <Container>
                <Stack
                    direction={"row"}
                >
                    <MenuBox flex={2}
                             sx={{
                                 display: {
                                     xs: "none",
                                     md: "flex",
                                 },
                             }}>
                        {MenuItems.map((item)=>(
                            <Typography
                                variant={"body2"}
                                color={"white"}
                                marginRight={3}>
                                {item.Name}
                            </Typography>
                        ))}
                    </MenuBox>
                    <Box
                        flex={1}
                        color={"white"}
                        mt={1}
                    >
                        2023 Kiscean. All write reserved.
                    </Box>
                </Stack>
                <Typography
                    variant={"h6"}
                    align={"center"}
                    mt={8}
                    color={"white"}
                >
                    Never Stop Learning!
                </Typography>
            </Container>
        </Box>
    );
};

export  default Footer;