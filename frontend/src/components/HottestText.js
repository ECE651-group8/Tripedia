import React from "react";
import "./HottestText.css";
import Card from "@mui/material/Card";

function HottestText({ rank, text1, text2, text3 }) {
  return (
    <div className="hottestText">
      <Card className="all-hottest-card" id="hottest-text">
        <div className="hottest-text">
          <p>
            #{rank}. {text1}
          </p>
          <h>{text2}</h>
        </div>
        <h1> {text3} Likes</h1>
      </Card>
    </div>
  );
}
export default HottestText;
