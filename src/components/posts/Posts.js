import React from 'react';
import {
    Box,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Posts = () => {
    return (
        <Box>
            <Typography
                variant='h4'
                align='center'
            >
                Posts my site
            </Typography>
            <Grid container
                columnSpacing={{
                    xs: 0,
                    sm: 1,
                    md: 1,
                }}
                direction={'column'}
            >
                <Grid item xs>
                    Card
                </Grid>
                <Grid item xs>
                    Card
                </Grid>
                <Grid item xs>
                    Card
                </Grid>
            </Grid>

        </Box>
    )
};

export default Posts;