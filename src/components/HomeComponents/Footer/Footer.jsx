import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavHashLink } from "react-router-hash-link";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Footer.css";
import logo from "../../../images/logo-2.svg";

const Footer = () => {
  return (
    <div className="footer-section">
      <Container sx={{ py: 6, color: "#fff" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box>
                <img src={logo} alt="" />
                <Typography
                  sx={{ my: 2, width: { xs: 1, md: "45%" } }}
                  variant="body1"
                >
                  The perfect soil to cultivate your ideas & unleash your
                  creativity
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 20, md: 24 },
                      fontWeight: 700,
                      mb: 2,
                    }}
                    variant="h4"
                  >
                    MENU
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <NavHashLink
                      smooth="true"
                      className="footer-nav-link"
                      to="/home#home"
                    >
                      Home
                    </NavHashLink>

                    <NavHashLink
                      smooth="true"
                      className="footer-nav-link"
                      to="/home#features"
                    >
                      Features
                    </NavHashLink>

                    <NavHashLink
                      smooth="true"
                      className="footer-nav-link"
                      to="/home#token"
                    >
                      Token
                    </NavHashLink>

                    <NavHashLink
                      smooth="true"
                      className="footer-nav-link"
                      to="/home#nft"
                    >
                      NFT Options
                    </NavHashLink>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 20, md: 24 },
                      fontWeight: 700,
                      mb: 2,
                    }}
                    variant="h4"
                  >
                    Grow with us
                  </Typography>
                  <Typography
                    sx={{ my: 2, width: { xs: 1, md: "80%" } }}
                    variant="body1"
                  >
                    Stay close to the community by joining us
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                    <a
                      href="httsp://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      href="httsp://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="httsp://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TelegramIcon />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 400,
            textAlign: "center",
            color: "#fff",
          }}
          variant="body2"
        >
          &copy; 2022, Radish Ecosystem. All Rights Reserved.
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
