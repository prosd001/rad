import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useRecoilValue } from "recoil";
import { modeState } from "../../atoms/modeAtom";

const CollectionFilter = () => {
  // Global states
  const mode = useRecoilValue(modeState)


  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250, }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ px: 4, py: 4 }}>
        <Typography sx={{ fontSize: { xs: 20, md: 28 }, }} variant="h4">
          Filter
        </Typography>
        <Box sx={{ my: 2 }} className="filter-search-box">
          <SearchIcon />
          <input type="search" placeholder="Search..." />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: { xs: 16, md: 20 }, }} variant="h6">
            Buy now
          </Typography>
          <Switch defaultChecked />
        </Box>
        {/*  */}
        <Box sx={{ my: 2 }}>
          <Accordion className="filter-accordion" defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Background</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="secondary" defaultChecked />}
                  label={
                    <Typography variant="body1">
                      Gradient
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        140
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Green
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        134
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Blue
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        311
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Dark
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        144
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      White
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        30
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Purple
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        99
                      </span>
                    </Typography>
                  }
                />
                <Divider sx={{ mt: 1 }} />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ my: 2 }}>
          <Accordion className="filter-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Type</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="secondary" defaultChecked />}
                  label={
                    <Typography variant="body1">
                      Gradient
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        140
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Green
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        134
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Blue
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        311
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Dark
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        144
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      White
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        30
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Purple
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        99
                      </span>
                    </Typography>
                  }
                />
                <Divider sx={{ mt: 1 }} />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ my: 2 }}>
          <Accordion className="filter-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="secondary" defaultChecked />}
                  label={
                    <Typography variant="body1">
                      Gradient
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        140
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Green
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        134
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Blue
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        311
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Dark
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        144
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      White
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        30
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Purple
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        99
                      </span>
                    </Typography>
                  }
                />
                <Divider sx={{ mt: 1 }} />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ my: 2 }}>
          <Accordion className="filter-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Rarity</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="secondary" defaultChecked />}
                  label={
                    <Typography variant="body1">
                      Gradient
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        140
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Green
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        134
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Blue
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        311
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Dark
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        144
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      White
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        30
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Purple
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        99
                      </span>
                    </Typography>
                  }
                />
                <Divider sx={{ mt: 1 }} />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ my: 2 }}>
          <Accordion className="filter-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Chain</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="secondary" defaultChecked />}
                  label={
                    <Typography variant="body1">
                      Gradient
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        140
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Green
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        134
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Blue
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        311
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Dark
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        144
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      White
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        30
                      </span>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <Typography variant="body1">
                      Purple
                      <span
                        style={{
                          color: "#3EB98E",
                          marginLeft: 5,
                          fontWeight: "bold",
                        }}
                      >
                        99
                      </span>
                    </Typography>
                  }
                />
                <Divider sx={{ mt: 1 }} />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
  return (
    <div>
      <Container sx={{ pt: 18, pb: 6, }} >
        {/* filter for mobile  */}
        <Box sx={{ px: 4, display: { xs: "block", md: "none" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: { xs: 20, md: 28 } }} variant="h4">
              Filter
            </Typography>
            <Box>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <FilterAltIcon color="secondary" />
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Box>

        {/* fitler for desktop  */}
        <Box sx={{ px: 4, display: { xs: "none", md: "block" } }}>
          <Typography sx={{ fontSize: { xs: 20, md: 28 } }} variant="h4">
            Filter
          </Typography>
          <Box sx={{ my: 2 }} className="filter-search-box">
            <SearchIcon />
            <input type="search" placeholder="Search..." />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: { xs: 16, md: 20 } }} variant="h6">
              Buy now
            </Typography>
            <Switch defaultChecked />
          </Box>
          {/*  */}
          <Box sx={{ my: 2 }}>
            <Accordion className="filter-accordion" defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Background</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="secondary" defaultChecked />}
                    label={
                      <Typography variant="body1">
                        Gradient
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          140
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Green
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          134
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Blue
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          311
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Dark
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          144
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        White
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          30
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Purple
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          99
                        </span>
                      </Typography>
                    }
                  />
                  <Divider sx={{ mt: 1 }} />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ my: 2 }}>
            <Accordion className="filter-accordion">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="secondary" defaultChecked />}
                    label={
                      <Typography variant="body1">
                        Gradient
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          140
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Green
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          134
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Blue
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          311
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Dark
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          144
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        White
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          30
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Purple
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          99
                        </span>
                      </Typography>
                    }
                  />
                  <Divider sx={{ mt: 1 }} />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ my: 2 }}>
            <Accordion className="filter-accordion">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Price</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="secondary" defaultChecked />}
                    label={
                      <Typography variant="body1">
                        Gradient
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          140
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Green
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          134
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Blue
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          311
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Dark
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          144
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        White
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          30
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Purple
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          99
                        </span>
                      </Typography>
                    }
                  />
                  <Divider sx={{ mt: 1 }} />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ my: 2 }}>
            <Accordion className="filter-accordion">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Rarity</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="secondary" defaultChecked />}
                    label={
                      <Typography variant="body1">
                        Gradient
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          140
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Green
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          134
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Blue
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          311
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Dark
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          144
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        White
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          30
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Purple
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          99
                        </span>
                      </Typography>
                    }
                  />
                  <Divider sx={{ mt: 1 }} />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ my: 2 }}>
            <Accordion className="filter-accordion">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Chain</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="secondary" defaultChecked />}
                    label={
                      <Typography variant="body1">
                        Gradient
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          140
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Green
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          134
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Blue
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          311
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Dark
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          144
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        White
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          30
                        </span>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                      <Typography variant="body1">
                        Purple
                        <span
                          style={{
                            color: "#3EB98E",
                            marginLeft: 5,
                            fontWeight: "bold",
                          }}
                        >
                          99
                        </span>
                      </Typography>
                    }
                  />
                  <Divider sx={{ mt: 1 }} />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default CollectionFilter;
