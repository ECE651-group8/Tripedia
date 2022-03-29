import React from "react";
import "../../App.css";
import "./Display.css";
import Navbar from "../Navbar";
import Right from "../Right";
import Hottest from "../Hottest";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Footer from "../Footer.js";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Display() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Item class="paper">
            <Hottest />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item class="paper">
            <Right />
          </Item>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Item class="paper">
          <Footer />
        </Item>
      </Grid>
    </Box>
  );
}
