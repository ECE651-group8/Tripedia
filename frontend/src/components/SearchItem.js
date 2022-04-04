import "./SearchItem.css";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SwipeSlide from "./SwipeSlide";
import axios from "axios";

const data = [
  {
    spot: "National Park",
    location: "Toronto",
    time: "2D-5D",
    url: "https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg",
  },
];

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
}));

export default function SearchItem() {
  const [keyword, setKeyword] = useState("");

  const keywordGetHandler = (event) => {
    setKeyword(event.target.value);
  };
  const [post, setPost] = useState([]);
  const searchHandler = async () => {
    let url =
      "http://localhost:8080/api/search/findBySpotNameContaining?spotName=" +
      keyword;
    const res = await axios.get(url);

    setPost(res.data);
  };
  console.log(post);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <div className="content">
              <h1 id="search-text">Search</h1>
              <div className="search-box">
                <input
                  id="input"
                  type="search"
                  autocomplete="off"
                  spellcheck="false"
                  role="combobox"
                  aria-live="polite"
                  placeholder="Start Your Journey From Here"
                  onChange={keywordGetHandler}
                ></input>
                <a href="/search#top">
                  <button className="search-button" onClick={searchHandler}>
                    Search
                  </button>
                </a>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
      <a name="top"></a>
      <Grid item xs={12}>
        <Item>
          <SwipeSlide data={post} />;
        </Item>
      </Grid>
    </Box>
  );
}
