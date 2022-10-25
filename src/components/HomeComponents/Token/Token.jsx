import { Box, Container, Grid, Typography } from "@mui/material";
import token from "../../../images/rds-illustration.png";

const Token = () => {
  return (
    <div id="token">
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{ fontSize: { xs: 28, md: 42 }, mb: 2 }}
                  variant="h3"
                >
                  <span className="colored-text">$RDS</span> Token
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
                  $RDS is a token created on the RADIX DLT used for transactions
                  within the RADISH platform and get access to our in-house
                  features.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <img style={{ width: "80%" }} src={token} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Token;
