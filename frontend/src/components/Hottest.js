import React from "react";
import "./Hottest.css";
import HottestTitle from "./HottestTitle";
import HottestCard from "./HottestCard";
import HottestText from "./HottestText";

function Hottest() {
  return (
    <div className="hottest">
      {/* HottestTitle */}
      <a href="trips/5">
        <HottestTitle
          img="https://www.banfftours.com/wp-content/uploads/2017/08/Banff-Ave-and-Town-in-Winter-1140x530.jpg"
          text="#1. Banff National Park"
        />
      </a>

      {/* HottestCard */}
      <HottestCard
        img="https://images.unsplash.com/photo-1611079187868-085ce659db96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        rank="2"
        text1="Blue Montain"
        text2="Join us between 3 and 6 pm on our outdoor patio’s to win new Dakine Mittens."
        text3="73.4"
      />
      <HottestCard
        img="https://www.planetware.com/photos-large/CDN/canada-view-over-old-quebec.jpg"
        rank="3"
        text1="Old Quebec"
        text2="Old Quebec is a UNESCO World Heritage Site and one of Canada's historic gems.."
        text3="44.5"
      />
      <HottestCard
        img="https://www.planetware.com/wpimages/2021/06/canada-top-tourist-attractions-whistler-mountain-skiers.jpg"
        rank="4"
        text1="Whistler"
        text2="a famous ski resort of Whistler Blackcomb and the year-round resort ..."
        text3="23.6"
      />
      <HottestCard
        img="https://www.planetware.com/photos-large/CDN/canada-ontario-ottawa-parliament-hill.jpg"
        rank="5"
        text1="Parliament Hill"
        text2="Ottawa's Parliament Hill stands high above the Ottawa River."
        text3="19.8"
      />
      <HottestText
        rank="6"
        text1="Signal Hill National Historic Site"
        text2="John's harbor, overlooking the city and sea, is Signal Hill National Historic Site."
        text3="15.4"
      />
      <HottestText
        rank="7"
        text1="Old Montreal"
        text2="lined with lovely historic buildings, a place to go for great shopping and fine dining."
        text3="11.3"
      />
      <HottestText
        rank="8"
        text1="Polar Bears, Manitoba"
        text2="One of Canada's most unique attractions is the polar bear migration that..."
        text3="9.1"
      />
    </div>
  );
}
export default Hottest;
