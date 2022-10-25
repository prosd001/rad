import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../atoms/modeAtom";
import feature1 from "../../../images/feature-1.svg";
import feature2 from "../../../images/feature-2.svg";
import feature3 from "../../../images/feature-3.svg";

const features = [
  {
    id: 1,
    title: "Radish Square with Market Design",
    des: "A marketplace for digital assets that equips creators with scalability, security, decentralization and accessibility.",
    img: feature1,
  },
  {
    id: 2,
    title: "RADeFi",
    des: "A native DEX offering various farming opportunities, where users can swap $RDS token to other pairings",
    img: feature2,
  },
  {
    id: 3,
    title: "Rootpad",
    des: "A launchpad designed to assist digital creators to launch their product on a community-first ecosystem",
    img: feature3,
  },
];

const Features = () => {
  // Global states
  const mode = useRecoilValue(modeState);

  return (
    <div id="features">
      <Container sx={{ py: 6 }}>
        <Typography
          sx={{ fontSize: { xs: 28, md: 42 }, textAlign: "center" }}
          variant="h3"
        >
          Our <span className="colored-text">Features</span>
        </Typography>
        <Typography
          sx={{
            color: "#9495A1",
            textAlign: "center",
            width: { xs: 1, md: "50%" },
            mx: "auto",
            my: 2,
          }}
          variant="body1"
        >
          Radish is a friendly platform built on the RADIX DLT with the purpose
          of streamlining DeFi for innovators.
        </Typography>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {features.map((feature) => (
              <Grid key={feature.id} item xs={2} sm={4} md={4}>
                <Card
                  className={`${mode === "light" ? "feature-card-light" : "feature-card"
                    }`}
                  sx={{ height: 1, boxShadow: "none" }}
                >
                  <Box sx={{ p: 2 }}>
                    <img className="feature-img" src={feature.img} alt="" />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.des}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Features;
