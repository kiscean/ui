import React from "react";
import {
    CardBox,
    StyledCard,
    StyledTypography
} from "./category_styles_const";
import {Container} from "@mui/material";
import guitars from '../../static/guitars.png';
import dress from '../../static/dress.jpg';
import interior from '../../static/interior.jpg';
import amp from '../../static/amplifer.jpg';

const Category = () => {
    return (
        <Container>
            <CardBox>
                <StyledCard sx={{
                    backgroundImage: `url(${guitars})`
                }} />
                <StyledTypography>Guitar</StyledTypography>
            </CardBox>
        </Container>
    );
};

export default Category;