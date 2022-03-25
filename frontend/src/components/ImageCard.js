import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function ImageCard() {
  const itemData = [
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/daodao/photo-o/10/9d/ed/bb/caption.jpg?w=1200&h=-1&s=1",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3a/0a/7b/casa-loma-gardens.jpg?w=500&h=300&s=1",
      title: "Burger",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/e4/toronto.jpg?w=700&h=500&s=1",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1607414464583-aa96b59e6bde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbmFkYSUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&q=60",
      title: "Coffee",
      cols: 2,
    },
  ];
  return (
    <ImageList sx={{ height: 305 }} variant="quilted" cols={4} rowHeight={150}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 150, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
