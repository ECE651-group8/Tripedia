import "./Upload.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/Notifications";

import BookmarkBorderIcon from "@mui/icons-material/Bookmark";
import Footer from "../Footer.js";
const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
}));

const Input = styled("input")({
  display: "none",
});

export default function Sidebar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Item>
            <Card sx={{ bgcolor: "rgb(242, 219, 174)", height: 350 }}>
              <CardHeader
                className="cardheader"
                avatar={
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </Stack>
                }
                title="Please set the travel header diagram"
                subheader="It is recommended to select a large hd image larger than 1680px, such as the original camera image"
              />

              <Box
                component="form"
                sx={{ "& > :not(style)": { width: "130ch", ml: 15 } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Fill in the travel book title"
                  variant="outlined"
                />
              </Box>
            </Card>
          </Item>
        </Grid>

        <Grid xs={1}></Grid>
        <Item></Item>
        <Grid item xs={7}>
          <Item>
            <TextField
              id="standard-multiline-static"
              fullWidth
              label="Start your note from here..."
              multiline
              rows={15}
              variant="standard"
            />

            <Box className="sidebarIcon">
              <Stack direction="row" spacing={40}>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Post
                </Button>
              </Stack>
            </Box>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <div className="sidebar">
            <SidebarOption active Icon={HomeIcon} text="upload picture" />
            <input type="file"></input>
            <SidebarOption Icon={SearchIcon} text="upload people" />
            <SidebarOption Icon={NotificationsNoneIcon} text="upload fee" />
            <SidebarOption Icon={MailOutlineIcon} text="upload loaction" />
            <SidebarOption Icon={BookmarkBorderIcon} text="upload date" />
          </div>
        </Grid>

        <Grid item xs={12}>
          <Item></Item>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}
