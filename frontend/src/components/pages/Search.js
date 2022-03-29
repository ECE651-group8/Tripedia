import React from "react";
import SearchItem from "../SearchItem.js";
import Grid from "@mui/material/Grid";
import Footer from "../Footer.js";
import Navbar from "../Navbar";

function Search() {
  return (
    <div>
      <Navbar />
      <SearchItem />

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </div>
  );
}

export default Search;
