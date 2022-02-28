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
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

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
          img: 'https://images.unsplash.com/photo-1607414464583-aa96b59e6bde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbmFkYSUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&q=60',
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

    <Grid container spacing={0}>
        <Grid item xs={8}>
          <Item>

<Card   sx={{ 
            bgcolor:'rgb(242, 209, 109)',
            width: 4/5,
            height: 540,
            border: 1,
            boxShadow: 1,
            borderRadius: 2,
            zIndex: 'modal',
            ml: 5,
            mt: 5,
            
        }} >     
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="About Toronto"
        subheader="
        
        Toronto's obvious comparable in the U.S. is Chicago, as other have mentioned. 
        But since the 1980's."

        
      />
     
      <CardContent >
        <Typography variant="body2" color="text.secondary">
        Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore. It's a dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic, free-standing CN Tower. Toronto also has many green spaces, from the orderly oval 
        of Queen’s Park to 400-acre High Park and its trails, sports facilities and zoo.<br/>
        We've heard Toronto described as New York City run by the Swiss,
        and it's true—you can find world-class theater, shopping and restaurants here, 
        but the sidewalks are clean and the people are friendly. 
        The best place to start is literally at the top—the CN Tower, 
        the tallest freestanding structure in the Western Hemisphere.<br/>
        Visited there in the month of June 2019. Otherwise temperature of Toronto was about 24-25 but cool water gave the feeling of winter. 
        Very beautiful place. On one side you will see the calm nature but on the other side there is lot of traffic. 
        You will miss the eating points there as I only found a ice cream shop. 
        You can see from there the famous CN Tower. <br/>
        Hit the ice at any one of the lovely rinks around the city. Nathan Phillips Square is an urban wonderland with lights, lights and more lights. <br/>
        With its backdrop of fairy lights arching overtop the rink, and the iconic TORONTO sign, a skate date here makes for a quintessential Instagram moment. <br/>
 
    
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
        <Grid item xs={4}>
          <Item>
          
<List 
           
          
          sx={{ ml:0,mt:5, border: 1,
            boxShadow: 1,
            borderRadius: 2,
            width: '100%', maxWidth: 400, 
          bgcolor: 'rgb(242, 219, 174)' }}>
      
        
        
      <ListItem>
      <div class="mapouter">
            <div class="gmap_canvas">
                <iframe
                    width="340"
                    height="500"
                    id="gmap_canvas"
                    src="https://www.google.com/maps/d/embed?mid=1N-D8BKvYT6Ctc6uTpRCbL0HFEAY&msa=0&ie=UTF8&t=m&ll=43.66465366516071%2C-79.39340425840898&spn=1.590449%2C5.592041&z=13&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                ></iframe>
                <a href=" "></a >
                
            </div>
        </div>


        
      </ListItem>
      
    </List>

          </Item>
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
                                    style={{ marginLeft: 20}}
                                />
                                <p>Toronto</p>
                            </div>
                            <h2>Blue Mountain</h2>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
