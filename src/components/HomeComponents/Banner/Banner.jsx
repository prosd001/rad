import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import heroIllustration from "../../../images/hero-illustration.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { modeState } from "../../../atoms/modeAtom";
import { ReactComponent as Wave } from '../../../images/wave.svg'

const Banner = () => {
  // Global states
  const mode = useRecoilValue(modeState);

  // Instances
  const navigate = useNavigate();

  // Handles
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div id="home" >
      <Wave className='waveAnimation' />
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: 30, md: 48 },
                    fontWeight: 600,
                    mb: 2,
                    color: mode === "light" ? "#fff" : "#fff",
                  }}
                  variant="h1"
                >
                  The All-in-One Creative Ecosystem
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    mb: 3,
                    color: "#fff",
                  }}
                  variant="body1"
                >
                  Cultivate your Ideas. Unleash your creativity.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Button
                    sx={{
                      bgcolor: "#3EB98E",
                      textTransform: "inherit",
                      color: mode === "light" ? "#fff" : "",
                      fontWeight: 700,
                      "&:hover": {
                        backgroundColor: "#3EB98E",
                      },
                    }}
                    variant=""
                    endIcon={<ArrowRightAltIcon />}
                    onClick={handleClick}
                  >
                    Explore
                  </Button>
                  <Button
                    sx={{
                      color: mode === "light" ? "#fff" : "#fff",
                      textTransform: "inherit",
                      fontWeight: 700,
                      borderColor: '#fff'
                    }}
                    variant="outlined"

                  >
                    Whitepaper
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <img style={{ width: "70%" }} src={heroIllustration} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
