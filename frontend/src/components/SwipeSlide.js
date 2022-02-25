import React from 'react';
import Slider from 'react-slick';

import LeftArrow from '../assets/left-arrow.svg';
import RightArrow from '../assets/right-arrow.svg';
import './SwipeSlide.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';



import MoreVertIcon from '@mui/icons-material/MoreVert';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

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



    const itemData = [
        {
          img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/81/97/f2/cn-tower.jpg?w=500&h=300&s=1',
          title: 'Breakfast',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3a/0a/7b/casa-loma-gardens.jpg?w=500&h=300&s=1',
          title: 'Burger',
        },
        {
          img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/e4/toronto.jpg?w=700&h=500&s=1',
          title: 'Camera',
        },
        {
          img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/df/b6/1e/view-from-the-ktichen.jpg?w=400&h=300&s=1',
          title: 'Coffee',
          cols: 2,
        },
        
        
      ];
      
      
      
    const Item = styled(Box )(({ theme }) => ({
        ...theme.typography.body2,  
      }));
      
    return (


        <div className="card__container">

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
          <ImageList
      sx={{ height: 305}}
      variant="quilted"
      cols={4}
      rowHeight={150}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 150, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
          <Card sx={{ 
            width: 4/5,
            border: 1,
            boxShadow: 1,
            borderRadius: 2,
            zIndex: 'modal',
            ml: 17,
            mt: 1,
        }} >     
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="About Toronto"
        subheader="We've heard Toronto described as New York City run by the Swiss,and it's true—you can find world-class theater, shopping and restaurants here, 
        but the sidewalks are clean and the people are friendly. 
        The best place to start is literally at the top—the CN Tower, 
        the tallest freestanding structure in the Western Hemisphere."
        
      />
     
      <CardContent >
        <Typography variant="body2" color="text.secondary">
        

        Visited there in the month of June 2019. Otherwise temperature of Toronto was about 24-25 but cool water gave the feeling of winter. 
        Very beautiful place. On one side you will see the calm nature but on the other side there is lot of traffic. You will miss the eating points there as I only found a ice cream shop. 
        You can see from there the famous CN Tower. Love to be there.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
     
    </Card>
          </Item>
        </Grid>
        <Grid item xs>
    <Item></Item>
  </Grid>
        <Grid item xs={7}>
          {/* <Item>Toronto Island was a lot of fun. I took a walk through the island and enjoyed myself. I found an app called paint by the numbers battle app when I was sitting down on the beach. That kept me entertained. So it was fun.</Item> */}
        </Grid>
        <Grid item xs={3}>
        
        </Grid>
        <Grid item xs>
    <Item></Item>
  </Grid>
      </Grid>
    </Box>
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
