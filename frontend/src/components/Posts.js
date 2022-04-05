import React, { useState } from "react";
import "./Posts.css";
import Topbar from "./Topbar.js";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
  const [post2, setPost2] = useState([]);
  json2.then((item) => {
    setPost2(item);
  });

  return (
    <div>
      <Box sx={{ verflowY: "scroll" }}>
        <Topbar />

        <ImageList variant="masonry" cols={3} gap={8} className="total-list">
          {post2.map((item) => (
            <ImageListItem key={item.postId} className="list">
              <a href={"/detail/" + item.postId}>
                <img
                  src={`${item.images[0].imageUrl}`}
                  srcSet={`${item.images[0].imageUrl}`}
                  alt={item.title}
                  loading="lazy"
                  width={"100%"}
                  className="list-img"
                />
              </a>
              <ImageListItemBar
                title={item.title}
                subtitle={
                  <a href={"/timeline/" + item.user.userId}>
                    <span>by: {item.user.userName}</span>
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
