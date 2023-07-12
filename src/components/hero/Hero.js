import React from "react";
import {
  Container,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { StyleCard } from "./hero_styles_const";

const Hero = () => {

  return <Container>
    <Grid container spacing={1} direction={'column'}>
      <Grid xs={6} md={8}>
        <StyleCard sx={{backgroundImage:'url(${})'}}>

        </StyleCard>
      </Grid>
      <Grid xs={6} md={8}>
        <StyleCard>

        </StyleCard>
      </Grid>
    </Grid>
  </Container>
};
export default Hero;