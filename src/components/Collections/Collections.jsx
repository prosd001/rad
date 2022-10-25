import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { modeState } from "../../atoms/modeAtom";
import CollectionFilter from "./CollectionFilter";
import CollectionHeader from "./CollectionHeader";
import CollectionProjects from "./CollectionProjects";
import "./Collections.css";

const Collections = () => {
  // Global states
  const mode = useRecoilValue(modeState)

  // Scroll to top 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div style={{ background: `${mode === 'light' ? '#F1F2F5' : '#131417'}` }}>
      <CollectionHeader />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={3}>
          <CollectionFilter />
        </Grid>
        <Grid item xs={2} sm={4} md={9}>
          <CollectionProjects />
        </Grid>
      </Grid>
    </div>
  );
};

export default Collections;
