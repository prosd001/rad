import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import rootpadProject from "../../../images/rootpad-project.svg";
import userIcon from "../../../images/user-icon.svg";
import projectLogo from "../../../images/project-logo.svg";
import Countdown from "react-countdown";

const projects = [
  {
    id: 1,
    projectName: "Project Name",
    startIn: 500000,
    price: 0.45,
    member: 1173,
    img: rootpadProject,
  },
  {
    id: 2,
    projectName: "Project Name",
    startIn: 500000,
    price: 0.45,
    member: 1173,
    img: rootpadProject,
  },
  {
    id: 3,
    projectName: "Project Name",
    startIn: 500000,
    price: 0.45,
    member: 1173,
    img: rootpadProject,
  },
  {
    id: 4,
    projectName: "Project Name",
    startIn: 500000,
    price: 0.45,
    member: 1173,
    img: rootpadProject,
  },
];

const RootpadProjects = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, my: 8 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {projects.map((project) => (
            <Grid item xs={2} sm={4} md={6} key={project.id}>
              <Paper
                className="project-card"
                sx={{
                  textAlign: "center",
                  px: { xs: 1, md: 2 },
                  py: { xs: 2, md: 4 },
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box>
                  <img width={"100%"} src={project.img} alt="" />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: { xs: 16, md: 20 }, fnweight: 600 }}
                    variant="h4"
                  >
                    {project.projectName}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-between",
                      my: 2,
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 12, fnweight: 400, color: "#9495A1" }}
                      variant="h6"
                    >
                      Start in
                    </Typography>
                    <Typography
                      sx={{ fontSize: 12, fnweight: 400, color: "#fff" }}
                      variant="h6"
                    >
                      <Countdown date={Date.now() + project.startIn} />
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-between",
                      my: 2,
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 12, fnweight: 400, color: "#9495A1" }}
                      variant="h6"
                    >
                      Bid Start from
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fnweight: 400,
                        color: "#3EB98E",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                      variant="h6"
                    >
                      <img className="project-logo" src={projectLogo} alt="" />
                      {project.price} $RDS
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                    }}
                  >
                    <Button
                      sx={{
                        color: "#3EB98E",
                        fontSize: 12,
                        textTransform: "inherit",
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        bgcolor: "#303545",
                      }}
                      variant=""
                    >
                      <img src={userIcon} alt="" />
                      <Typography
                        sx={{ color: "#3EB98E", fontSize: 12, fnweight: 400 }}
                        variant="h6"
                      >
                        {project.member}
                      </Typography>
                      members
                    </Button>
                  </Box>
                  <Box sx={{ textAlign: { xs: "center", md: "left" }, mt: 2 }}>
                    <Button className="project-card-button" variant="">
                      Details
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default RootpadProjects;
