import React from 'react';
import {
    Box,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PostsCard from "./PostsCard";

const Posts = () => {
    return (
        <Box>
            <Box
                sx={{
                    background: "#871613",
                }}
                height="4ch"
            >
                <Typography
                    variant='h5'
                    align='start'
                    textAlign={"center"}
                    textTransform={"uppercase"}
                    color={"white"}
                >
                    Posts my site
                </Typography>
            </Box>
            <Grid container
                columnSpacing={{
                    xs: 0,
                    sm: 1,
                    md: 1,
                }}
                direction={'column'}
            >
                <Grid item xs>
                    <PostsCard myDirection={'flex'} />
                </Grid>
                <Grid item xs>
                    <PostsCard myDirection={'flex'} />
                </Grid>
                <Grid item xs>
                    <PostsCard myDirection={'flex'} />
                </Grid>
            </Grid>
            <Typography
                variant={"h6"}
                bgcolor={"black"}
                color={"white"}
                align={"center"}
                mt={4}
                mb={4}
            >
                Most Popular
            </Typography>
            <Grid container
                  columnSpacing={{
                      xs: 0,
                      sm: 1,
                      md: 1,
                  }}
                  direction={'row'}
            >
                <Grid item md={6} sm={6}>
                    <PostsCard myDirection={'block'} />
                </Grid>
                <Grid item md={6} sm={6}>
                    <PostsCard myDirection={'block'}/>
                </Grid>
                <Grid item md={6} sm={6}>
                    <PostsCard myDirection={'block'}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Posts;