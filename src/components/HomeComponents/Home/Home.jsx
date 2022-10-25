import React from "react";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../atoms/modeAtom";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import JoinUs from "../JoinUs/JoinUs";
import Navigation from "../Navigation/Navigation";
import NFT from "../NFT/NFT";
import Token from "../Token/Token";
import "./Home.css";

const Home = () => {
  // Global states
  const mode = useRecoilValue(modeState);

  return (
    <div style={{ backgroundColor: mode === "light" ? "#F1F2F5" : "#131417" }}>
      <Navigation />
      <Banner />
      <Features />
      <Token />
      <NFT />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Home;
