import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DashboardHome.css";
import client from "../../../images/client.svg";
import activity from "../../../images/activity-img.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import greenDot from "../../../images/green-dot.svg";
import DashboardMain from "./DashboardMain";

const collectors = [
  { id: 1, name: "Gaugly Fluida", userId: "@gaugly", img: client },
  { id: 2, name: "Fajar A", userId: "@fajar", img: client },
  { id: 3, name: "Rayja", userId: "@rayja", img: client },
  { id: 4, name: "Ghoster", userId: "@blocko", img: client },
  { id: 5, name: "Gaugly Fluida", userId: "@gaugly", img: client },
  { id: 6, name: "Gaugly Fluida", userId: "@gaugly", img: client },
];
const activities = [
  {
    id: 1,
    name: "Xeksafhone",
    shotDes: "Bought by you for 0.89 $RDS",
    time: "13 minute ago",
    img: activity,
  },
  {
    id: 2,
    name: "Tryangle",
    shotDes: "Received 4.56 $RDS",
    time: "13 minute ago",
    img: activity,
  },
  {
    id: 3,
    name: "The Bubler",
    shotDes: "Received 3.89 $RDS",
    time: "13 minute ago",
    img: activity,
  },
  {
    id: 4,
    name: "Fadisk Collections",
    shotDes: "Bought by you for 0.4 $RDS",
    time: "13 minute ago",
    img: activity,
  },
  {
    id: 5,
    name: "Fadisk Collections",
    shotDes: "Bought by you for 0.89 $RDS",
    time: "13 minute ago",
    img: activity,
  },
  {
    id: 6,
    name: "Fadisk Collections",
    shotDes: "Bought by you for 0.89 $RDS",
    time: "13 minute ago",
    img: activity,
  },
];

const DashboardHome = () => {

  return (
    <div>
      <Box className="dashboard-home-container">
        <Box className="main-content">
          <DashboardMain />
        </Box>
        <Box className="right-sidebar">
          {/* collectors-list */}
          <Box className="collectors-list">
            <Typography
              sx={{ fontSize: 20, fontWeight: 600, my: 4 }}
              variant="h3"
            >
              Top Collectors
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
          {/* Recent Activity */}
          <Box sx={{ marginTop: 8 }}>
            <Box
              sx={{ display: "flex", justifyContent: "flex-start", my: 4, alignItems: 'center', gap: 6 }}
            >
              <Typography sx={{ fontSize: 20, fontWeight: 600, }} variant="h3">
                Recent Activity
              </Typography>
              <Button
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#DE345E",
                  textTransform: "inherit",
                }}
                variant="text"
              >
                Show all
              </Button>
            </Box>
            <Box>
              {activities.slice(0, 4).map((activity) => (
                <Box sx={{ my: 2, display: "flex", gap: 2 }} key={activity.id}>
                  <img width={50} height={50} src={activity.img} alt="" />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ width: 1 }}>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: 600 }}
                        variant="h4"
                      >
                        {activity.name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 12, fontWeight: 400, color: "#3EB98E" }}
                        variant="subtitle1"
                      >
                        {activity.shotDes}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <img src={greenDot} alt="" />
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontWeight: 400,
                            color: "#9495A1",
                          }}
                        >
                          {activity.time}
                        </Typography>
                      </Box>
                    </Box>
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

export default DashboardHome;
