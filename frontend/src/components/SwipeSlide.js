import React from "react";
import Slider from "react-slick";

import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import "./SwipeSlide.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

export default function SwipeSlide({ data }) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
  }));

  return (
    <div className="card__container">
      <Grid container spacing={0} sx={{ display: "flex" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} className="card-box">
          <h1>Trending Spots</h1>
          <hr />
          <Slider {...settings} className="card__container--inner">
            {data.map((item) => {
              return (
                <div className="card__container--inner--card" key={item.spotId}>
                  <a href={"/trips/" + item.spotId}>
                    <img src={item.images[0].imageUrl} alt="tourism_img" />
                  </a>

                  <div className="card__container--inner--card--date_time">
                    <img
                      src="https://www.wanderon.in/svg/clock.svg"
                      alt="time"
                    />
                    <p>{item.time}</p>

                    <img
                      src="https://www.wanderon.in/svg/map-pin.svg"
                      alt="location"
                      style={{ marginLeft: 20 }}
                    />
                    <p>{item.province}</p>
                  </div>
                  <h2>{item.spotName}</h2>
                </div>
              );
            })}
          </Slider>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
