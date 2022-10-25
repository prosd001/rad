import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "../../../images/dashboard-icon.svg";
import { ReactComponent as DashboardIconLight } from "../../../images/dashboard-icon-light.svg";
import { ReactComponent as FaqIcon } from "../../../images/faq-icon.svg";
import { ReactComponent as FaqIconLight } from "../../../images/faq-icon-light.svg";
import logo from "../../../images/logo.svg";
import { ReactComponent as RadefiIcon } from "../../../images/radefi-icon.svg";
import { ReactComponent as RadefiIconLight } from "../../../images/radefi-icon-light.svg";
import { ReactComponent as RootpadIcon } from "../../../images/rootpad-icon.svg";
import { ReactComponent as RootpadIconLight } from "../../../images/rootpad-icon-light.svg";
import { ReactComponent as SettingIcon } from "../../../images/setting-icon.svg";
import { ReactComponent as SettingIconLight } from "../../../images/setting-icon-light.svg";
import { ReactComponent as SquareIcon } from "../../../images/square-icon.svg";
import { ReactComponent as SquareIconLight } from "../../../images/square-icon-light.svg";
import SearchIcon from "@mui/icons-material/Search";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import ModeSwitch from "../ModeSwitch/ModeSwitch";
import { useRecoilState } from "recoil";
import { modeState } from "../../../atoms/modeAtom";


const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;

  // Global states
  const [mode, setMode] = useRecoilState(modeState);

  // Local states
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Instances
  const location = useLocation();

  // Handles
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mode switch handler
  const handleModeChange = (e) => {
    if (e.target.checked) {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", }}>
      <Toolbar
        sx={{
          py: 1,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ pt: 6, pb: 3 }}>
          <Link to="/">
            <img
              style={{ width: 100, marginTop: 5, marginBottom: 5 }}
              src={logo}
              alt=""
            />
          </Link>
        </Box>
      </Toolbar>

      <ListItem color="primary" className="list-item" button>
        <ListItemIcon>
          {mode === 'light' ? <DashboardIconLight /> : <DashboardIcon />}
        </ListItemIcon>
        <ListItemText
          as={NavLink}
          to="/dashboard"
          color="info.main"
          className={(navInfo) => (navInfo.isActive ? "nav-selected" : "")}
          primary="Dashboard"
        />
      </ListItem>
      <ListItem color="primary" className="list-item" button>
        <ListItemIcon>
          {mode === 'light' ? <SquareIconLight /> : <SquareIcon />}
        </ListItemIcon>
        <ListItemText
          as={NavLink}
          to="/dashboard/radish-square"
          color="info.main"
          className={(navInfo) => (navInfo.isActive ? "nav-selected" : "")}
          primary="Radish Square"
        />
      </ListItem>
      <Box>
        <ListItem className="list-item" button>
          <ListItemIcon>
            {mode === 'light' ? <RadefiIconLight /> : <RadefiIcon />}
          </ListItemIcon>
          <ListItemText
            as={NavLink}
            to="/dashboard/radefi"
            color="info.main"
            className={(navInfo) => (navInfo.isActive ? "nav-selected" : "")}
            primary="RaDefi"
          />
        </ListItem>

        <ListItem className="list-item" button >
          <ListItemIcon >
            {mode === 'light' ? <RootpadIconLight /> : <RootpadIcon />}
          </ListItemIcon>
          <ListItemText
            as={NavLink}
            to="/dashboard/rootpad"
            color="info.main"
            className={(navInfo) => (navInfo.isActive ? "nav-selected" : "")}
            primary="Rootpad"
            sx={{ color: '#fff' }}

          />
        </ListItem>

        <Box sx={{ height: 60 }}></Box>

        <Divider sx={{ width: '80%', margin: 'auto', height: '2px' }} color={`${mode === 'light' ? '#F05E82' : '#32324B'}`} />

        <Box sx={{ mt: 3 }}>
          <ListItem className="list-item" button>
            <ListItemIcon>
              {mode === 'light' ? <SettingIconLight /> : <SettingIcon />}
            </ListItemIcon>
            <ListItemText
              as={NavLink}
              to="/dashboard/setting"
              color="info.main"
              className={(navInfo) => (navInfo.isActive ? "nav-selected" : "")}
              primary="Settings"
            />
          </ListItem>
          <ListItem className="list-item" button>
            <ListItemIcon>
              {mode === 'light' ? <FaqIconLight style={{ color: "green !important" }} /> : <FaqIcon style={{ color: "green !important" }} />}
            </ListItemIcon>
            <ListItemText
              as={NavLink}
              to="/dashboard/faq"
              color="info.main"
              className={(navInfo) => (navInfo.isActive ? "nav-selected" : "")}
              primary="FAQ"
            />
          </ListItem>
        </Box>
      </Box>
      <Box
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <ModeSwitch
          onChange={handleModeChange}
          checked={mode === "dark" ? true : false}
        />
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", background: `${mode === 'light' ? '#F1F2F5' : ''}` }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: 0,
        }}
      >
        <Toolbar
          sx={{
            bgcolor: `${mode === 'light' ? '#F1F2F5' : '#131417'}`,
            boxShadow: 0,
            py: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="h3"
            sx={{ fontSize: { xs: 20, md: 32, marginLeft: 48 }, fontWeight: 600, color: `${mode === 'light' ? '#282830' : ''}` }}
          >
            {location.pathname === "/dashboard"
              ? "Dashboard"
              : location.pathname === "/dashboard/radish-square"
                ? "Radish Square"
                : location.pathname === "/dashboard/radefi"
                  ? "RaDefi"
                  : location.pathname === "/dashboard/rootpad"
                    ? "Rootpad"
                    : location.pathname === "/dashboard/setting"
                      ? "Settings"
                      : location.pathname === "/dashboard/faq"
                        ? "FAQ"
                        : "Dashboard"}
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box className="search-box" sx={{
                background: `${mode === 'light' ? '#fff' : ''}`
              }}>
                <SearchIcon />
                <input type="search" placeholder="Search..." style={{ color: `${mode === 'light' ? '#282830' : ''}` }} />
              </Box>

            </Box>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },

        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,

            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: `${mode === 'light' ? '#DE345E' : 'linear-gradient(180deg, #060614 0%, #2e323e 100%)'}`,

            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
          px: 2,
          mr: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },

        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
