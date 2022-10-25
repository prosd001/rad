import {
  Box,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../atoms/modeAtom";
import client2 from "../../../images/client-2.svg";
import projecThumb from "../../../images/project-2.svg";

const projects = [
  {
    id: 1,
    projectName: "Project Name",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 2,
    projectName: "Project Name",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 3,
    projectName: "Project Name",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 4,
    projectName: "Project Name",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 5,
    projectName: "Project Name",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
];

const RadishSquareProject = () => {
  const [value, setValue] = React.useState(1);
  // Global states
  const mode = useRecoilValue(modeState);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Container sx={{ py: 6 }}>
        <Typography sx={{ fontSize: 20, fontWeight: 600, my: 2 }} variant="h3">
          Trending Projects
        </Typography>
        <Box
          sx={{
            maxWidth: { xs: 320, sm: 480, md: 1 },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
          >
            <Tab value={1} label="All" />
            <Tab value={2} label="Art" />
            <Tab value={3} label="Music" />
            <Tab value={4} label="Design" />
            <Tab value={5} label="Game" />
            <Tab value={6} label="Video" />
            <Tab value={7} label="Fashion" />
          </Tabs>
        </Box>
        <Box sx={{ flexGrow: 1, my: 4 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {projects.map((project) => (
              <Grid item xs={2} sm={4} md={3} key={project.id}>
                <Paper
                  className="project-card"
                  sx={{
                    textAlign: "center",
                    pt: 2,
                    pb: 1,
                    px: 2,
                    borderRadius: 2,
                    background: `${mode === 'light' ? '#fff' : 'linear-gradient(180deg, #1D1E22 0%, #2A2E3A 100%)'}`
                  }}
                  elevation={`${mode === 'light' ? '0' : '1'}`}
                >
                  <img
                    style={{ width: "100%" }}
                    src={project.projectThumb}
                    alt=""
                  />
                  <Box>
                    <Box sx={{ marginTop: -4 }}>
                      <img src={project.img} alt="" />
                      <Typography
                        sx={{ fontSize: 12, color: "#9495A2" }}
                        variant="subtitle2"
                      >
                        {project.userId}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        my: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 14, fontWeight: 600 }}
                        variant="h4"
                      >
                        {project.projectName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#3EB98E",
                        }}
                        variant="h6"
                      >
                        {project.price} $RDS
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default RadishSquareProject;
