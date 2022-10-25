import { Box, Button, Typography } from "@mui/material";
import React from "react";
import client from "../../../images/client.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RadishSquareBanner from "./RadishSquareBanner";
import "./RadishSquare.css";
import RadishSquareProject from "./RadishSquareProject";

const collectors = [
  { id: 1, name: "Gaugly Fluida", userId: "@gaugly", img: client },
  { id: 2, name: "Fajar A", userId: "@fajar", img: client },
  { id: 3, name: "Rayja", userId: "@rayja", img: client },
  { id: 4, name: "Ghoster", userId: "@blocko", img: client },
  { id: 5, name: "Gaugly Fluida", userId: "@gaugly", img: client },
  { id: 6, name: "Gaugly Fluida", userId: "@gaugly", img: client },
];

const RadishSquare = () => {
  return (
    <div>
      <Box className="dashboard-home-container">
        <Box className="main-content">
          <RadishSquareBanner />
          <RadishSquareProject />
        </Box>
        <Box className="right-sidebar">
          {/* collectors-list */}
          <Box className="collectors-list">
            <Typography
              sx={{ fontSize: 20, fontWeight: 600, my: 4 }}
              variant="h3"
            >
              Top Account
            </Typography>
            <Box>
              {collectors.slice(0, 4).map((collector) => (
                <Box sx={{ my: 2, display: "flex", gap: 2 }} key={collector.id}>
                  <img width={50} height={50} src={collector.img} alt="" />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ width: 150 }}>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: 600 }}
                        variant="h4"
                      >
                        {collector.name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 12, fontWeight: 400, color: "#9495A1" }}
                        variant="subtitle1"
                      >
                        {collector.userId}
                      </Typography>
                    </Box>
                    <Button
                      startIcon={<ChevronRightIcon />}
                      variant="text"
                      sx={{ color: "#3EB98E", justifySelf: "flex-end" }}
                    ></Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default RadishSquare;
