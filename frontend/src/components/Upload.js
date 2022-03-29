import "./Upload.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

import AddCardIcon from "@mui/icons-material/AddCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
}));

const Input = styled("input")({
  display: "none",
});

export default function Sidebar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Card
              sx={{
                height: 350,
                backgroundImage:
                  "url(https://get.wallhere.com/photo/cloud-sky-mountain-atmosphere-plant-building-tree-nature-azure-Natural-landscape-snow-dusk-Freezing-atmospheric-phenomenon-horizon-mountainous-landforms-landscape-mountain-range-hill-castle-calm-winter-city-mist-fog-house-evening-Massif-reflection-haze-hill-station-steeple-fell-dawn-spire-conifer-sunrise-church-frost-place-of-worship-painting-night-skyline-summit-tourist-attraction-fir-Tourism-afterglow-chapel-pine-family-Alps-2078065.jpg)",
              }}
            >
              <CardHeader
                className="cardheader"
                avatar={
                  // <Stack direction="row" alignItems="center" spacing={5}>
                  <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera className="color" />
                    </IconButton>
                  </label>
                  // </Stack>
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
        <Grid item xs={8}>
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

        <Grid item xs={3}>
          <Box sx={{ display: "flex", alignItems: "flex-end", my: 3 }}>
            <label htmlFor="icon-button-file" className="icon-button">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                color="primary"
                aria-label="Upload picture"
                component="span"
                id="svg"
                sx={{ color: "action.active", mr: 6, my: 0.5 }}
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <p id="text">Upload picture</p>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end", my: 3 }}>
            <AccessibilityNewIcon
              sx={{ color: "action.active", mr: 7, my: 0.5, ml: 1 }}
            />
            <TextField
              id="input-with-sx"
              label="Input visitor num"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", my: 3 }}>
            <AddCardIcon
              sx={{ color: "action.active", mr: 7, my: 0.5, ml: 1 }}
            />
            <TextField
              id="input-with-sx"
              label="Input fee"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", my: 5 }}>
            <AccessTimeIcon
              sx={{ color: "action.active", mr: 7, my: 0.5, ml: 1 }}
            />
            <input type="date" id="input-with-sx" variant="standard" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
