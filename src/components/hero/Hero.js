import React from "react";
import {
  Box,
  Container,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Hero = () => {
  const StyleCard = styled(Box)({
    display: 'flex',
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 200,
  })
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