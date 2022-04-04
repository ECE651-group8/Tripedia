import React, { useState } from "react";
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
import "./Content.css";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
}));

const postid = window.location.pathname.substring(8);
async function getData() {
  const res = await fetch("http://localhost:8080/api/post/" + postid, {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  });
  const json = await res.json();
  const detail = [
    {
      location: json.spot.spotName,
      cost: json.cost,
      title: json.title,
      people: json.visitorNum,
      date: json.tripTime,
      content: json.content,
    },
  ];
  return detail;
}

const detail = getData();
export default function Content() {
  const [post, setPost] = useState([]);
  detail.then((item) => {
    setPost(item);
  });
  console.log(detail);
  return (
    <>
      {post.map((item) => (
        <>
          <Grid
            item
            xs={6}
            sx={{
              bgcolor: "#d3dce1",
              boxShadow: 1,
              borderRadius: 2,
              mt: 2,
              overflow: "auto",
              height: "30rem",
            }}
          >
            <Item>
              <ReactMarkdown id="title">{item.title}</ReactMarkdown>
              <ReactMarkdown id="content">{item.content}</ReactMarkdown>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <List
                sx={{
                  borderRadius: 2,
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "#425784",
                  color: "white",
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
