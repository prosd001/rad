import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { ReactComponent as FilterIcon } from "../../../images/filter-icon.svg";
import man from "../../../images/man-eatting.svg";
import "./Rootpad.css";
import RootpadBanner from "./RootpadBanner";
import RootpadProjects from "./RootpadProjects";

const Rootpad = () => {
  return (
    <div>
      <Box sx={{ display: { xs: "block", md: "none" }, px: 4, py: 4 }}>
        <RootpadBanner />
      </Box>
      <Box className="rootpad-container">
        <Box className="main-content">
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <RootpadBanner />
          </Box>
          <RootpadProjects />
        </Box>
        <Box className="right-sidebar" sx={{ py: 3 }}>
          {/* filter  */}
          <Box>
            <Typography sx={{ fontSize: 24, fontWeight: 600 }} variant="h3">
              Filter by
            </Typography>
            <FormControl sx={{ my: 2, minWidth: 1 }}>
              <Select
                sx={{ bgcolor: "#2D3036" }}
                // value={age}
                // onChange={handleChange}
                displayEmpty={true}
                renderValue={() => "This week"}
              >
                <MenuItem>This week </MenuItem>
                <MenuItem>This week </MenuItem>
                <MenuItem>This week </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ my: 2, minWidth: 1 }}>
              <Select
                sx={{ bgcolor: "#2D3036" }}
                // value={age}
                // onChange={handleChange}
                displayEmpty={true}
                renderValue={() => "All Categories"}
              >
                <MenuItem>All Categories</MenuItem>
                <MenuItem>All Categories</MenuItem>
                <MenuItem>All Categories</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ my: 2, minWidth: 1 }}>
              <Select
                sx={{ bgcolor: "#2D3036" }}
                // value={age}
                // onChange={handleChange}
                displayEmpty={true}
                renderValue={() => "All Type"}
              >
                <MenuItem>All Type</MenuItem>
                <MenuItem>All Type</MenuItem>
                <MenuItem>All Type</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* sort by  */}
          <Box>
            <Typography
              sx={{ fontSize: 24, fontWeight: 600, mt: 4 }}
              variant="h3"
            >
              Sort by
            </Typography>
            <Box sx={{ my: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                  Time
                </Typography>
                <FilterIcon />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                  Members
                </Typography>
                <FilterIcon />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                  Price
                </Typography>
                <FilterIcon />
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img style={{ width: "100%" }} src={man} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Rootpad;
