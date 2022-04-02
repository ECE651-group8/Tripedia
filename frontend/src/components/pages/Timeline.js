import React from "react";
import TimelineAlone from "../TimelineAlone";
import Grid from "@mui/material/Grid";
import Footer from "../Footer.js";
import ProfileCard from "../ProfileCard.js";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "../Navbar";

const item = [
  {
    img: "https://static.tacdn.com/img2/brand/home/homefeb2022_dt.webp",
    user_url:
      "http://p1-q.mafengwo.net/s10/M00/8E/78/wKgBZ1nwuTiAR5z9AAWG6X5Chik43.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90",
    title: "Suzanne R",
    date: "Aug 19, 2018",
    summary: `A Waterloo university student,share my daily life with you.
    <br />
    Weclome to check and talk with me ！`,
  },
];

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
}));

export default function Timeline() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <ProfileCard />
          </Item>
        </Grid>
        <Grid item xs>
          <Item></Item>
        </Grid>
        <Grid item xs>
          <Item></Item>
        </Grid>
      </Grid>

      <TimelineAlone />

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Box>
  );
}
