import React from "react";
import Upload from "../Upload.js";
import Grid from "@mui/material/Grid";
import Footer from "../Footer.js";
import Navbar from "../Navbar";
function UploadNew() {
  return (
    <div>
      <Navbar />
      <Upload />

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </div>
  );
}

export default UploadNew;
