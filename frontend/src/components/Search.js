import React from "react";
import SearchItem  from "../SearchItem.js";
import Grid from "@mui/material/Grid";
import Footer from "../Footer.js";

function Search() {
  return (
    <div>
      <SearchItem />

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </div>
  );
}

export default Search;
