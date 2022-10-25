import { Box, Container, Grid, Typography } from "@mui/material";
import nft from "../../../images/alpha-illustration-dark.png";

const NFT = () => {
  return (
    <div id="nft">
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3, lg: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <img style={{ width: "80%" }} src={nft} alt="" />
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{ fontSize: { xs: 28, md: 42 }, mb: 2 }}
                  variant="h3"
                >
                  Alpha Radish <span className="colored-text">NFT</span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    mb: 3,
                    color: "#9495A1",
                    width: { xs: 1, md: "70%" },
                  }}
                  variant="body1"
                >
                  Alpha Radish is an NFT collection of 10,000 digital radishes
                  that will kickstart the RADISH platform. They are nurtured in
                  a friendly community of like-minded rads in the beddings of
                  RADIX DLT.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default NFT;
