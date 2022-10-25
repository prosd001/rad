import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../atoms/modeAtom";
import flower from "../../../images/flower.svg";

const JoinUs = () => {
  // Global states
  const mode = useRecoilValue(modeState);

  return (
    <Box sx={{ px: 4 }}>
      <Container className="join-us-container">
        <Box className="top-flower-box">
          <img src={flower} alt="" />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 24, md: 36 },
            color: mode === "light" ? "#fff" : "",
          }}
          variant="h3"
        >
          Do you want to list your project on our platform?
        </Typography>
        <Button
          variant=""
          sx={{
            bgcolor: "#3EB98E",
            textTransform: "inherit",
            mt: 3,
            width: { xs: 1, md: 150 },
            color: mode === "light" ? "#fff" : "",
          }}
        >
          Join Us Now!
        </Button>
        <Box className="bottom-flower-box">
          <img src={flower} alt="" />
        </Box>
      </Container>
    </Box>
  );
};

export default JoinUs;
