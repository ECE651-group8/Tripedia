import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";
import ProfileCard from "../ProfileCard.js";

import Footer from "../Footer.js";
import Content from "../Content.js";
import "./Detail.css";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
}));

/*const item = [
  {
    img: "http://p1-q.mafengwo.net/s19/M00/47/21/CoNHPmIaQKZYq2cWABA0PCwHNiI.png?imageMogr2%2Fstrip",
    user_url:
      "http://p1-q.mafengwo.net/s10/M00/8E/78/wKgBZ1nwuTiAR5z9AAWG6X5Chik43.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90",
    title: "Suzanne R",
    date: "Jan 19, 2021",
    summary: `Ontario Science Center is a natural science and technology museum, which is more suitable for children. <br/>
      There are a lot of scientifically interesting toys in it, and people who are innocence can find a lot of resonance here.`,
  },
];*/

export default function Detail() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <ProfileCard />;
          </Item>
        </Grid>
        <Grid item xs>
          <Item></Item>
        </Grid>
        <Content />
        <Grid item xs>
          <Item></Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Footer />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
