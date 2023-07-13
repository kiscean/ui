import React from "react";
import {
  Container,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  StyledCard,
  StyledTypography,
  StyledWrapper
} from "./hero_styles_const";
import guitars from '../../static/guitars.png'
import dress from '../../static/dress.jpg'
import interior from '../../static/interior.jpg'
import amp from '../../static/amplifer.jpg'

const Hero = () => {

  return <Container>
    <Grid container direction={'row'} columnSpacing={3}>
      <Grid xs={6} md={3}>
        <StyledCard sx={{
          backgroundImage:`url(${guitars})`
        }}>
          <StyledWrapper>
            <StyledTypography>
              Guitars
            </StyledTypography>
          </StyledWrapper>
        </StyledCard>
      </Grid>
      <Grid xs={6} md={3}>
        <StyledCard sx={{
          backgroundImage:`url(${amp})`
        }}>
          <StyledWrapper>
            <StyledTypography>
              Amplifier
            </StyledTypography>
          </StyledWrapper>
        </StyledCard>
      </Grid>
      <Grid xs={6} md={3}>
        <StyledCard sx={{
          backgroundImage:`url(${dress})`
        }}>
          <StyledWrapper>
            <StyledTypography>
              Style
            </StyledTypography>
          </StyledWrapper>
        </StyledCard>
      </Grid>
      <Grid xs={6} md={3}>
        <StyledCard sx={{
          backgroundImage:`url(${interior})`
        }}>
          <StyledWrapper>
            <StyledTypography>
              Interior
            </StyledTypography>
          </StyledWrapper>
        </StyledCard>
      </Grid>
    </Grid>
  </Container>
};
export default Hero;