import React from "react";
import {
  Container,
} from "@mui/material";
import {
  red,
  blueGrey
} from '@mui/material/colors';
import Grid from "@mui/material/Unstable_Grid2";
import { StyledCard } from "./hero_styles_const";
import guitars from '../../static/guitars.png'
import dress from '../../static/dress.jpg'
import interior from '../../static/interior.jpg'
import amp from '../../static/amplifer.jpg'

const Hero = () => {

  return <Container sx={{
    background: red[100]
  }}>
    <Grid container direction={'row'} columnSpacing={0} border={"5px b"}>
      <Grid xs={12} md={6}>
        <StyledCard sx={{
          backgroundImage:`url(${guitars})`
        }}>
        </StyledCard>
        <StyledCard sx={{
          backgroundImage:`url(${interior})`
        }}>
        </StyledCard>
      </Grid>
      <Grid xs={12} md={6}>
        <StyledCard sx={{
          backgroundImage:`url(${amp})`
        }}>
        </StyledCard>
        <StyledCard sx={{
          backgroundImage:`url(${dress})`
        }}>
        </StyledCard>
      </Grid>
    </Grid>
  </Container>
};
export default Hero;