import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import client from "../../images/client-3.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ReactComponent as FacebookIcon } from "../../images/facebook.svg";
import { ReactComponent as DiscordIcon } from "../../images/discord.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CollectionHeader = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="collection-header">
      <Container>
        <Button
          sx={{ bgcolor: "rgba(28, 28, 33, 0.29)", textTransform: "inherit", color: '#fff' }}
          startIcon={<ChevronLeftIcon />}
          variant=""
          onClick={handleClick}
        >
          Back
        </Button>
        <Paper
          className="collection-header-box"
          sx={{ px: { xs: 1, md: 4 }, py: { xs: 1, md: 3 } }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{ alignItems: "center" }}
          >
            <Grid item xs={2} sm={4} md={7}>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1, md: 4 },
                  alignItems: "center",
                }}
              >
                <img className="collection-client-img" src={client} alt="" />
                <Box>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Typography
                      sx={{ fontSize: { xs: 16, md: 24 } }}
                      variant="h6"
                    >
                      Projects Name
                    </Typography>
                    <CheckCircleIcon color="secondary" />
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, my: 2 }}>
                    <a
                      className="social-icon"
                      href="http://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      className="social-icon"
                      href="http://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon />
                    </a>

                    <a
                      className="social-icon"
                      href="http://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DiscordIcon />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={5}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{ bgcolor: "#353947", textTransform: "inherit" }}
                  variant=""
                >
                  Items
                  <span style={{ color: "#3EB98E", marginLeft: 5 }}>6.7K</span>
                </Button>
                <Button
                  sx={{ bgcolor: "#353947", textTransform: "inherit" }}
                  variant=""
                >
                  Owner
                  <span style={{ color: "#3EB98E", marginLeft: 5 }}>5.9K</span>
                </Button>
                <Button
                  sx={{ bgcolor: "#353947", textTransform: "inherit" }}
                  variant=""
                >
                  Floor Price
                  <span style={{ color: "#3EB98E", marginLeft: 5 }}>75.4</span>
                </Button>
                <Button
                  sx={{ bgcolor: "#353947", textTransform: "inherit" }}
                  variant=""
                >
                  Daily Volume
                  <span style={{ color: "#3EB98E", marginLeft: 5 }}>75.4</span>
                </Button>
                <Button
                  sx={{ bgcolor: "#353947", textTransform: "inherit" }}
                  variant=""
                >
                  Daily Change
                  <span style={{ color: "#3EB98E", marginLeft: 5 }}>-34.3</span>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default CollectionHeader;
