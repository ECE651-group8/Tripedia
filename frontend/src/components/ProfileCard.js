import React from "react";
import "./ProfileCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
}));
export default function ProfileCard({ item }) {
  return (
    <Item>
      {item.map((item) => (
        <>
          <Card sx={{ height: 350 }}>
            <CardMedia
              component="img"
              height="350"
              image={item.img}
              alt="Paella dish"
            />
          </Card>
          <Card
            sx={{
              width: 4 / 5,
              border: 1,
              boxShadow: 1,
              borderRadius: 2,
              zIndex: "modal",
              ml: 17,
              mt: 1,
            }}
          >
            <CardHeader
              avatar={
                <Avatar src={item.user_url} sx={{ width: 77, height: 77 }}>
                  {/* //用户 */}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.title}
              subheader={item.date}
            />

            <CardContent>
              <Typography variant="body2" color="rgb(217, 114, 54)">
                {item.summary}
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
        </>
      ))}
    </Item>
  );
}
