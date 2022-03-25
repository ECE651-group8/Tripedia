import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";
import "./Spot.css";

export default function Spot() {
  const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
  }));
  const spot = [
    {
      title: "Toronto",
      subhead:
        "Toronto's obvious comparable in the U.S. is Chicago, as other have mentioned. But since the 1980's.",
      intro: `Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore.  
        It is a dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic, free-standing CN Tower.  
        Toronto also has many green spaces, from the orderly oval of Queen’s Park to 400-acre High Park and its trails, sports facilities and zoo.  We have heard Toronto described as New York City run by the Swiss, and it is true—you can find world-class theater, shopping and restaurants here,but the sidewalks are clean and the people are friendly.  The best place to start is literally at the top—the CN Tower, the tallest freestanding structure in the Western Hemisphere.  
        ![avatar](https://dynamic-media-cdn.tripadvisor.com/media/daodao/photo-o/10/9d/ed/bb/caption.jpg?w=1200&h=-1&s=1) `,
      mapurl:
        "https://www.google.com/maps/d/embed?mid=1N-D8BKvYT6Ctc6uTpRCbL0HFEAY&msa=0&ie=UTF8&t=m&ll=43.66465366516071%2C-79.39340425840898&spn=1.590449%2C5.592041&z=13&output=embed",
    },
  ];
  return (
    <div className="card__container">
      {spot.map((item) => {
        return (
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <Item id="text-box">
                <Card
                  sx={{
                    bgcolor: "rgb(242, 209, 109)",
                    height: 540,
                    border: 1,
                    boxShadow: 1,
                    borderRadius: 2,
                    zIndex: "modal",
                    ml: 5,
                    mt: 5,
                  }}
                >
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={"About " + item.title}
                    subheader={item.subhead}
                  />

                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <ReactMarkdown>{item.intro}</ReactMarkdown>
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
                  sx={{
                    ml: 0,
                    mt: 5,
                    border: 1,
                    boxShadow: 1,
                    borderRadius: 2,
                    width: "100%",
                    maxWidth: 400,
                    bgcolor: "rgb(242, 219, 174)",
                  }}
                >
                  <ListItem>
                    <div class="mapouter">
                      <div class="gmap_canvas">
                        <iframe
                          width="100%"
                          height="500"
                          id="gmap_canvas"
                          src={item.mapurl}
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                        ></iframe>
                        <a href=" "></a>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </Item>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}
