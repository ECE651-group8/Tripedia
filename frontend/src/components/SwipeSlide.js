import React from 'react';
import Slider from 'react-slick';

import LeftArrow from '../assets/left-arrow.svg';
import RightArrow from '../assets/right-arrow.svg';
import './SwipeSlide.css';

export default function SwipeSlide({ title, data }) {
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
    return (
        <div className="card__container">
            <h1>{title}</h1>
            <Slider {...settings} className="card__container--inner">
                {data.map((item, index) => {
                    return (
                        <div
                            className="card__container--inner--card"
                            key={index}
                        >
                            <img src={item.url} alt="tourism_img" />

                            <div className="card__container--inner--card--date_time">
                                <img
                                    src="https://www.wanderon.in/svg/clock.svg"
                                    alt="time"
                                />
                                <p>2D-5D</p>

                                <img
                                    src="https://www.wanderon.in/svg/map-pin.svg"
                                    alt="location"
                                    style={{ marginLeft: 10 }}
                                />
                                <p>Tornto</p>
                            </div>
                            <h2>Blue Mountain</h2>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
