import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ReactMarkdown from "react-markdown";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
}));
const data = [
  {
    content: ` But you also have to have a certain face to "share" with children.
      There are too many children playing here, and we are too embarrassed
      to "share" many facilities with the children. We only pass by
      silently, <br />
      so we strolled around for a while and then went back to the hotel to
      rest. It may be that the sun at noon is still a little poisonous,
      plus the excitement and lack of sleep last night, <br />
      we modified the itinerary and decided to take a lunch break at the
      hotel now. <br />
      It was not until after 4 pm that we started our journey again Second
      stop, The Distillery District. <br />
      This is really a great place to take pictures. <br />
      There are various photo spots nearby. Such as LOVE sign, Peace sign,
      etc. We also met a couple of newlyweds taking wedding photos here,
      and the beautiful atmosphere is beyond words. <br />
      There are all kinds of small shops along the road, selling all kinds
      of small boutiques. Here we meet a family of travelers from New
      York. He is an art performer. <br />
      He will have a performance in Toronto tomorrow, so he will bring his
      parents to visit. The most beautiful thing is that the family can
      share it together.`,
    date: "Jan 9, 2021",
    cost: "2000$",
    location: "Toronto",
    people: "4",
  },
];
export default function Content() {
  return (
    <>
      {data.map((item) => (
        <>
          <Grid
            item
            xs={6}
            sx={{
              bgcolor: "rgb(242, 209, 109)",
              border: 1,
              boxShadow: 1,
              borderRadius: 2,
              mt: 2,
            }}
          >
            <Item>
              <ReactMarkdown>{item.content}</ReactMarkdown>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <List
                sx={{
                  borderRadius: 2,
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "rgb(242, 219, 174)",
                  ml: 2,
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccessTimeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Date" secondary={item.date} />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccessibilityIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="People" secondary={item.people} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Cost" secondary={item.cost} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Location" secondary={item.location} />
                </ListItem>
              </List>
            </Item>
          </Grid>
        </>
      ))}
    </>
  );
}
