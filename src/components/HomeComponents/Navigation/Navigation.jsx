import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { useRecoilValue } from "recoil";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { modeState } from "../../../atoms/modeAtom";
import logo from "../../../images/logo-2.svg";
import "./Navigation.css";

// navbar
function Navigation(props) {
  const { window } = props;

  // Global states
  const mode = useRecoilValue(modeState);

  // Local states
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Instances
  const location = useLocation();

  // Misc
  const activeColor = "#282830"

  // Handles
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ mt: 3, px: 2 }}>
      {/* mobile menu  */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <NavHashLink
          smooth="true"
          className={`${mode === "light" ? "nav-link-light" : "nav-link"}`}
          to="/home#home"
        >
          Home
        </NavHashLink>

        <Divider />

        <NavHashLink
          smooth="true"
          className={`${mode === "light" ? "nav-link-light" : "nav-link"}`}
          to="/home#features"
        >
          Features
        </NavHashLink>
        <Divider />

        <NavHashLink
          smooth="true"
          className={`${mode === "light" ? "nav-link-light" : "nav-link"}`}
          to="/home#token"
        >
          Token
        </NavHashLink>
        <Divider />

        <NavHashLink
          smooth="true"
          className={`${mode === "light" ? "nav-link-light" : "nav-link"}`}
          to="/home#nft"
        >
          NFT Options
        </NavHashLink>
        <Divider />
        <Box sx={{ my: 2 }}>
          <Button
            sx={{ bgcolor: "#3EB98E", textTransform: "inherit" }}
            variant=""
          >
            Harvetst Now
          </Button>
        </Box>
      </nav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="nav-bar"
        sx={{
          boxShadow: 0,
          py: 1,
          backgroundColor: "#DE345E",
          backgroundImage: "none",
          position: 'static'
        }}
      >
        <Toolbar>
          {/* desktop menu  */}
          <Container>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
              }}
            >
              <Link to="/">
                <img className="logo" src={logo} alt="" />
              </Link>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <nav
                  className="navbar"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <NavHashLink
                    smooth="true"
                    className={`${mode === "light" ? "nav-link-light" : "nav-link"
                      }`}
                    to="/home#home"
                    style={{
                      color: location.hash === "#home" ? activeColor : "",
                    }}
                  >
                    Home
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className={`${mode === "light" ? "nav-link-light" : "nav-link"
                      }`}
                    to="/home#features"
                    style={{
                      color: location.hash === "#features" ? activeColor : "",
                    }}
                  >
                    Features
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className={`${mode === "light" ? "nav-link-light" : "nav-link"
                      }`}
                    to="/home#token"
                    style={{
                      color: location.hash === "#token" ? activeColor : "",
                    }}
                  >
                    Token
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className={`${mode === "light" ? "nav-link-light" : "nav-link"
                      }`}
                    to="/home#nft"
                    style={{
                      color: location.hash === "#nft" ? activeColor : "",
                    }}
                  >
                    NFT Options
                  </NavHashLink>
                  <Link
                    className={`${mode === "light" ? "nav-link-light" : "nav-link"
                      }`}
                    to="/collections"
                  >
                    Collections
                  </Link>
                </nav>
                <Box>
                  <Button
                    sx={{
                      bgcolor: "#3EB98E",
                      textTransform: "inherit",
                      "&:hover": {
                        backgroundColor: mode === "light" ? "#DE345E" : "",
                      },
                    }}
                    variant=""
                  >
                    Harvetst Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            color="info"
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "70%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mb: 3 }}></Box>
    </Box>
  );
}

Navigation.propTypes = {
  window: PropTypes.func,
};

export default Navigation;
