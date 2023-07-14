import React from "react";
import {
    CardBox,
    StyledCard,
    StyledTypography
} from "./category_styles_const";
import {Stack} from "@mui/material";
import guitars from '../../static/guitars.png';
import dress from '../../static/dress.jpg';
import interior from '../../static/interior.jpg';
import amp from '../../static/amplifer.jpg';

const Category = () => {
    return (
        <Stack
            Container
            direction={'row'}
            mt={3}
            spacing={3}
            ml={2}
            sx={{
                overflow: "auto",
            }}
            justifyContent={{
                md: "center",
                xs: "start",
            }}
        >
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${guitars})`
                }} />
                <StyledTypography>Guitar</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${amp})`
                }} />
                <StyledTypography>Amplifer</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${dress})`
                }} />
                <StyledTypography>Style</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${interior})`
                }} />
                <StyledTypography>Interior</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${guitars})`
                }} />
                <StyledTypography>Guitar</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${guitars})`
                }} />
                <StyledTypography>Guitar</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${amp})`
                }} />
                <StyledTypography>Amplifer</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${dress})`
                }} />
                <StyledTypography>Style</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${interior})`
                }} />
                <StyledTypography>Interior</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${guitars})`
                }} />
                <StyledTypography>Guitar</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${dress})`
                }} />
                <StyledTypography>Style</StyledTypography>
            </CardBox>
        </Stack>
    );
};

export default Category;