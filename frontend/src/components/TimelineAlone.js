import React from 'react'
import '../App.css';
import './TimelineAlone.css';
import {ReactComponent as WorkIcon} from "./work.svg";
import {ReactComponent as SchoolIcon} from "./school.svg";
import timelineBackup from "./timelineBackup";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const Item = styled(Box )(({ theme }) => ({
  ...theme.typography.body2,
 
  
  
}));


export default function TimelineAlone() {

    let workIconStyles = {background : "#06D6A0"};
    let schoolIconStyles = {background : "#f9c74f"};

  return (

    <div>

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
          <Card sx={{ height: 350 }} >
          <CardMedia
          component="img"
          height="350"
          
          image="https://static.tacdn.com/img2/brand/home/homefeb2022_dt.webp"
          alt="Paella dish"
          //这是前面班夫国家公园的东西，这边能不能合并在一起，并且上面有单独的 提示行来显示
        />
     
      </Card>

    <Card   sx={{ 
            width: 4/5,
            border: 1,
            boxShadow: 1,
            borderRadius: 2,
            zIndex: 'modal',
            ml: 17,
            mt: 1,
        }} >
         
        <CardHeader 
       
        avatar={
          <Avatar src="http://p1-q.mafengwo.net/s10/M00/8E/78/wKgBZ1nwuTiAR5z9AAWG6X5Chik43.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90" 
          sx={{ width: 77, height: 77 }}>
                {/* //用户 */}
          </Avatar>
        
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Suzanne R, Brooklyn"
        subheader="Aug 19, 2018"
        
        />

      
     
      <CardContent>
        <Typography variant="body2" color="rgb(2,89,89)">
       A Waterloo university student,share my daily life with you.<br/>
       Weclome to check and talk with me ！
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
        <Grid item xs>
    <Item></Item>
  </Grid>
      </Grid>
    </Box>

    
    <VerticalTimeline>
      {
        timelineBackup.map(element =>{
          let isWorkIcon = element.icon === "work";
          //Here, isWork will be true if element.icon is equal to work
          //叫做checker property 
          let showButton = 
          element.buttonText !== undefined && 
          element.buttonText !== null && 
          element.buttonText !== "" ;
          
          return(
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName='date'
              iconStyle={isWorkIcon ? workIconStyles: schoolIconStyles}
              //this iconstyle contains all css for the icon, just remember this point.
              icon ={isWorkIcon? <WorkIcon /> : <SchoolIcon />}
              //this is 用来展示，圆圈中进展的图片以及使用的方式
            >
              <h3 className='vertical-timeline-element-title'>
                {element.title}
              </h3>
              <h5 className='vertical-timeline-element-subtitle'>
                {element.location}
                
              </h5>
              <p id ="description">{element.description}</p>
              {showButton && (<a className={`button ${isWorkIcon ? "workButton": "schoolButton"
                }`} 
                href='/detail'>
                  {element.buttonText}
                  </a>)}
              {/* here button has function logic */}
            </VerticalTimelineElement>
          )
        })
      }
    </VerticalTimeline>
  </div>
    
  )
};


