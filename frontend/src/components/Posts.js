import React,{useState} from 'react';
import Masony from "react-masonry-component";
import "./Posts.css";

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Dome dummy content

// Masory Options
const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".photo-item",
};


async function getData() {
  const res = await fetch('http://localhost:8080/api/post', {
      headers: {
          'content-type': 'application/json',
      },
      method: 'GET',
  });
  const json = await res.json();
  console.log(json);
  return json;
}

const json = getData();

function Posts() {
  const [post, setPost] = useState([]);
  json.then(item => {
      setPost(item);
  });

  return (

      <div>
          {/* <div>00000</div>
          {post.map(item => (
              <div>{item.title}</div>
          ))}
          <div>11111</div> */}

          <Box sx={{ verflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.cost}>
            <a href = "/detail" >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            </a>          
            <ImageListItemBar
            title={item.title}
            subtitle={<a href = "/timeline" ><span>by: {item.author}</span></a>}    

            actionIcon={

            <IconButton sx={{ color: '#f00e0e' }}aria-label="add to favorites">
            <FavoriteIcon />
           </IconButton>
             
              
            }  
            position="below"
          />    
          </ImageListItem>
        ))}
      </ImageList>
    </Box>



      </div>
       

       

  );
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=247&h=332&q=80',
    title: 'Daily life in Downtown Toronto',
    author: 'Edward',

  },
  {
    img: 'https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=247&h=372&q=60',
    title: 'Cochi,India',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1617803672592-177dbdb3abfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=247&h=145&q=60',
    title: 'Enjoy your life in WatertonPark ',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://images.unsplash.com/photo-1607414464583-aa96b59e6bde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbmFkYSUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=247&h=166&q=60',
    title: 'Toronto CN Tower',
    author: 'Christian Mackie',
  },
  {
    img: 'https://images.unsplash.com/photo-1611674929309-30a2c9be2f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhbmFkYSUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=247&h=166&q=60',
    title: 'Jogging in Waterloo Park',
    author: 'Darren Richardson',
  },
  {
    img: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbmFkYSUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=247&h=332&q=60',
    title: 'weather in kitchener',
    author: 'Taylor Simpson',
  },
  {
    img: 'https://images.unsplash.com/photo-1597288253793-6a050b62e62d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNhbmFkYSUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=247&h=370&q=60',
    title: 'Nice View in Banff',
    author: 'Ben Kolde',
  },
  {
    img: 'https://images.unsplash.com/photo-1548214649-9b8570c50f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbmFkYSUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=247&h=145&q=60',
    title: 'Two days trip in Calgary',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://images.unsplash.com/photo-1594320126960-c08e13628dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbmFkYSUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=247&h=332&q=60',
    title: 'Best Shopping mall in Toronto',
    author: 'Jen P.',
  },
  {
    img: 'https://images.unsplash.com/photo-1617803672592-177dbdb3abfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=247&h=166&q=60',
    title: 'Fall in Algonquin',
    author: 'Douglas Sheppard',
  },
  {
    img: 'https://images.unsplash.com/photo-1599108689896-3f7c2631b0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhbmFkYSUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=247&h=145&q=60',
    title: 'Beautiful view in Waterloo',
    author: 'Fi Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1618162227832-308c1b488f63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=247&h=372&q=60',
    title: 'One day trip in Whistler',
    author: 'Hutomo Abrianto',
  },
];

export default Posts;
