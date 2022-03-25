import React from "react";
import TimelineAlone from "../TimelineAlone";
import Navbar from "../Navbar";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Footer from "../Footer.js";

function Timeline() {
  return (
    <div>
      <TimelineAlone />

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </div>
  );
}

export default Timeline;
