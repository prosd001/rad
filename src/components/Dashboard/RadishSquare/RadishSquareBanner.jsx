import { Box, Container, Typography } from "@mui/material";
import React from "react";
import clientImg from "../../../images/client-2.svg";
import projectLogo from "../../../images/project-logo.svg";

const RadishSquareBanner = () => {
  return (
    <div>
      <Container className="radish-square-banner">
        <Box sx={{ bgcolor: "rgba(19, 20, 23, 0.24)", p: 4, borderRadius: '0 0 24px 24px' }}>
          <Typography
            sx={{ fontSize: 32, fontWeight: 600, my: 2 }}
            variant="h3"
          >
            Double eye
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "inherit", md: "center" },
              gap: 3,
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <img width={22} height={22} src={clientImg} alt="" />
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#fff",
                }}
                variant="subtitle1"
              >
                Fajar A
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box sx={{}}>
                <img className="" src={projectLogo} alt="" />
              </Box>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#3EB98E",
                }}
                variant="h6"
              >
                0.36 $RDS
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default RadishSquareBanner;
