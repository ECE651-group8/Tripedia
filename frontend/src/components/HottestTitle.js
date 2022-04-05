import React from "react";
import "./HottestTitle.css";
import Card from "@mui/material/Card";

function HottestTitle({ img, text }) {
  return (
    <div className="hottestTitle">
      <Card class="all-hottest-card">
        <div
          className="bgimage"
          style={{
            backgroundImage: "url(" + img + ")",
          }}
        >
          <div className="mask">
            <h1>Hottest Trend</h1>
            <p>{text}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default HottestTitle;
