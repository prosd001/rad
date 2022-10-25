import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./DashboardHome.css";
import client2 from "../../../images/client-2.svg";
import collectionThumb from "../../../images/collection-thumb.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import projectThumb from "../../../images/project-thumb.svg";
import projectLogo from "../../../images/project-logo.svg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../atoms/modeAtom";

// slider next prev
const PreviousBtn = (props) => {
  const { onClick } = props;
  return (
    <div className={"PreviousArrow"} onClick={onClick}>
      <ChevronLeftIcon />
    </div>
  );
};
const NextBtn = (props) => {
  const { onClick } = props;
  return (
    <div className={"NextArrow"} onClick={onClick}>
      <ChevronRightIcon />
    </div>
  );
};

const trendingCollections = [
  {
    id: 1,
    projectName: "Project Name",
    clientName: "Fajar",
    img: client2,
    collectionThumb: collectionThumb,
  },
  {
    id: 2,
    projectName: "Project Name",
    clientName: "Fajar",
    img: client2,
    collectionThumb: collectionThumb,
  },
  {
    id: 3,
    projectName: "Project Name",
    clientName: "Fajar",
    img: client2,
    collectionThumb: collectionThumb,
  },
];

const todayPicks = [
  {
    id: 1,
    projectName: "Separated",
    clientName: "Fajar",
    price: 0.36,
    clientImg: client2,
    projectThumb: projectThumb,
    projectLogo: projectLogo,
  },

  {
    id: 2,
    projectName: "Separated",
    clientName: "Fajar",
    price: 0.36,
    clientImg: client2,
    projectThumb: projectThumb,
    projectLogo: projectLogo,
  },

  {
    id: 3,
    projectName: "Separated",
    clientName: "Fajar",
    price: 0.36,
    clientImg: client2,
    projectThumb: projectThumb,
    projectLogo: projectLogo,
  },

  {
    id: 4,
    projectName: "Separated",
    clientName: "Fajar",
    price: 0.36,
    clientImg: client2,
    projectThumb: projectThumb,
    projectLogo: projectLogo,
  },

  {
    id: 5,
    projectName: "Separated",
    clientName: "Fajar",
    price: 0.36,
    clientImg: client2,
    projectThumb: projectThumb,
    projectLogo: projectLogo,
  },
];

const DashboardMain = () => {
  // Global states
  const mode = useRecoilValue(modeState);

  // slider
  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* banner  */}
      <Container className="dashboard-banner">
        <Typography
          sx={{
            fontSize: 32,
            color: "#fff",
            fontWeight: 400,
            width: { xs: "80%", md: "60%" },
          }}
          variant="h3"
        >
          Discover, Collect, Sell and Create your own NFT
        </Typography>
        <Button
          sx={{ color: "#fff", bgcolor: "rgba(255, 255, 255, 0.16)", my: 2 }}
          variant="contained"
        >
          Discover Now
        </Button>
      </Container>
      {/* Trending Collections */}
      <Container sx={{ pt: 2, px: { xs: 0, md: 0 } }}>
        <Typography sx={{ fontSize: 20, fontWeight: 600 }} variant="h3">
          Trending Collections
        </Typography>

        <Box sx={{ flexGrow: 1, mb: 3, mt: 2 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {trendingCollections.map((collection) => (
              <Grid item xs={2} sm={4} md={4} key={collection.id}>
                <Paper
                  className="project-card"
                  sx={{ textAlign: "center", p: 1, borderRadius: 2, background: `${mode === 'light' ? '#fff' : 'linear-gradient(180deg, #1D1E22 0%, #2A2E3A 100%)'}` }}
                  elevation={`${mode === 'light' ? '0' : '1'}`}
                >
                  <img
                    style={{ width: "100%" }}
                    src={collection.collectionThumb}
                    alt=""
                  />
                  <Box>
                    <Box sx={{ marginTop: -4 }}>
                      <img src={collection.img} alt="" />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        sx={{ fontSize: 14, fontWeight: 600 }}
                        variant="h4"
                      >
                        {collection.projectName}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 12, fontWeight: 400, color: "#9495A1" }}
                        variant="subtitle1"
                      >
                        By {collection.clientName}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      {/* Today’s Pick */}
      <Container sx={{ py: 0, px: { xs: 0, md: 0 } }}>
        <Typography sx={{ fontSize: 20, fontWeight: 600 }} variant="h3">
          Today’s Pick
        </Typography>
        <Box sx={{ flexGrow: 1, mt: 1 }}>
          <Slider {...settings}>
            {todayPicks.map((pick) => (
              <Paper
                className="single-slide project-card"
                sx={{ p: 2, borderRadius: 2, background: `${mode === 'light' ? '#fff' : 'linear-gradient(180deg, #1D1E22 0%, #2A2E3A 100%)'}` }}
                elevation={`${mode === 'light' ? '0' : '1'}`}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    m: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{ margin: 0, width: "100%" }}
                    src={pick.projectThumb}
                    alt=""
                  />
                </Box>
                <Box>
                  <Box>
                    <Box
                      sx={{
                        my: 2,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 20, fontWeight: 600 }}
                        variant="h4"
                      >
                        {pick.projectName}
                      </Typography>
                      <Box sx={{ display: { xs: "none", md: "initial" } }}>
                        <img
                          className="project-logo"
                          src={pick.projectLogo}
                          alt=""
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: { xs: "inherit", md: "center" },
                        gap: 1,
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <img
                          width={22}
                          height={22}
                          src={pick.clientImg}
                          alt=""
                        />
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontWeight: 400,
                            color: "#9495A1",
                          }}
                          variant="subtitle1"
                        >
                          By {pick.clientName}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Box sx={{ display: { xs: "initial", md: "none" } }}>
                          <img
                            className="project-logo"
                            src={pick.projectLogo}
                            alt=""
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#3EB98E",
                          }}
                          variant="h6"
                        >
                          {pick.price} $RDS
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Slider>
        </Box>
      </Container>
    </div>
  );
};

export default DashboardMain;
