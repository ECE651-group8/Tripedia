import React, { useState } from "react";
import Masony from "react-masonry-component";
import "./Posts.css";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Dome dummy content

// Masory Options
const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".photo-item",
};

async function getData() {
  const res = await fetch("http://localhost:8080/api/spot", {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  });
  const json = await res.json();
  console.log(json);
  return json;
}

const json = getData();

async function getData2() {
  const res = await fetch("http://localhost:8080/api/post", {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  });
  const json = await res.json();
  console.log(json);
  return json;
}
const json2 = getData2();

function Posts() {
  const [post, setPost] = useState([]);
  json.then((item) => {
    setPost(item);
  });

  const [post2, setPost2] = useState([]);
  json2.then((item) => {
    setPost2(item);
  });

  return (
    <div>
      {post.map((item) => (
        <div>{item.imageUrl}</div>
      ))}
      {post2.map((item) => (
        <div>{item.title}</div>
      ))}
      <Box sx={{ verflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {post2.map((item) => (
            <ImageListItem key={item.imageUrl}>
              <a href="/detail">
                <img
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              </a>
              <ImageListItemBar
                title={item.title}
                subtitle={
                  <a href="/timeline">
                    <span>by: {item.author}</span>
                  </a>
                }
                actionIcon={
                  <IconButton
                    sx={{ color: "#f00e0e" }}
                    aria-label="add to favorites"
                  >
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

export default Posts;
