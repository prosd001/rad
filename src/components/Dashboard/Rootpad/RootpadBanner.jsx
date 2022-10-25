import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import driver from "../../../images/car-driver.svg";

const RootpadBanner = () => {
  return (
    <div>
      <Container className="rootpad-banner">
        <Typography
          sx={{
            fontSize: { xs: 16, md: 32 },
            color: "#fff",
            fontWeight: 400,
            textAlign: "center",
          }}
          variant="h3"
        >
          284 projects waiting for you...
        </Typography>
        <Box className="driver-box">
          <img src={driver} alt="" />
        </Box>
      </Container>
    </div>
  );
};

export default RootpadBanner;
