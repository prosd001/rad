import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import client2 from "../../images/client-2.svg";
import projecThumb from "../../images/project-2.svg";
import projectLogo from "../../images/project-logo.svg";

const projects = [
  {
    id: 1,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 2,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 3,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 4,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 5,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 6,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 7,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 8,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 9,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 10,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 11,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 12,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 13,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 14,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 15,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
  {
    id: 16,
    projectName: "Projects #4345",
    clientName: "Fajar",
    img: client2,
    projectThumb: projecThumb,
    userId: "@fajar",
    price: 0.36,
  },
];

const CollectionProjects = () => {
  return (
    <div>
      <Container sx={{ pt: { xs: 0, md: 18 }, pb: 6, }}>
        <Box sx={{ flexGrow: 1 }}>
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
                    py: 2,
                    px: 2,
                    borderRadius: 2,
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src={project.projectThumb}
                    alt=""
                  />
                  <Box sx={{ my: 2 }}>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: 600 }}
                      variant="h4"
                      gutterBottom
                    >
                      {project.projectName}
                    </Typography>
                    <Box
                      sx={{
                        my: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <img className="project-logo" src={projectLogo} alt="" />
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

export default CollectionProjects;
