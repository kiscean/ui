import React from 'react';
import {
    Box, Card,
    CardMedia, IconButton, TextField,
    Typography
} from "@mui/material";
import dress from '../../static/dress.jpg';
import {Send as SendIcon} from '@mui/icons-material';

const Rightbar = () => {
    return (
        <Box
            sx={{
                padding: 2,
            }}
        >
            <Typography
                variant={"h4"}
                align={"center"}
                mb={2}
            >
                THIS REAL COLE SALE
            </Typography>
            <CardMedia
                component={'img'}
                height="300"
                image={dress}
                alt="guitars_image"
                sx={{
                    width: '400px',
                    cursor: 'pointer',
                    "&:hover":{
                        opacity: 0.8,
                        boxSizing: 'border-box',
                        zIndex: 1,
                        transition: `all 0.50s ease`
                    }
                }}
            />
            <Typography
                align={"left"}
                variant={"body1"}
                mt={2}
            >
                Check out our list of all of Flipkart upcoming sales in India, Today’s special offers, the next sale & more. To know the most exciting sale, Flipkart Big Billion Days 2023 date, check out the list below.
            </Typography>
            <Typography
                align={"left"}
                variant={"body2"}
                color="#f44336"
                mt={2}
            >
                Don't forget to Subscribe KISCEAN Shop! <br /> <a href="https://google.com">Read More</a>
            </Typography>
            <Card
                sx={{
                    height: "200px",
                    marginTop: 2,
                }}
            >
                <Typography
                    align={"center"}
                    variant={"body1"}
                >
                    Ads Here
                </Typography>
            </Card>
            <Typography
                align={"center"}
                color={"white"}
                bgcolor={"#f44336"}
                mt={2}
            >
                Subscribe Via Email
            </Typography>
            <Box sx={{
                pl: 10,
            }}
            >
                <TextField
                    label="Your Email here!"
                    variant={"standard"}
                    color={"warning"}
                />
                <IconButton>
                    <SendIcon
                    sx={{
                        color: "#f44336"
                    }}
                    />
                </IconButton>
            </Box>
            <Card
                sx={{
                    height: "200px",
                    marginTop: 2,
                }}
            >
                <Typography
                    align={"center"}
                    variant={"body1"}
                >
                    Ads Here
                </Typography>
            </Card>
            <Card
                sx={{
                    height: "200px",
                    marginTop: 2,
                }}
            >
                <Typography
                    align={"center"}
                    variant={"body1"}
                >
                    Ads Here
                </Typography>
            </Card>
        </Box>
    );
};

export default Rightbar;