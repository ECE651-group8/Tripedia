import React from "react";
import "./HottestCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function HottestCard({ rank, text1, text2, text3, img }) {
  return (
    <div className="hottestCard">
      <Card class="all-hottest-card" id="hottest-card">
        <CardContent className="hottest-text" id="hottestText">
          <p>
            #{rank}. {text1}
          </p>
          <h>{text2}</h>
          <h1> {text3} Likes</h1>
        </CardContent>
        <CardMedia component="img" image={img} alt="pic2" id="hottest-img" />
      </Card>
    </div>
  );
}
export default HottestCard;
