import "./SearchItem.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SwipeSlide from "./SwipeSlide";

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
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <div className="content">
              <h1 id="search-text">Search</h1>
              <input
                id="input"
                type="search"
                autocomplete="off"
                spellcheck="false"
                role="combobox"
                aria-live="polite"
                placeholder="Start Your Journey From Here"
              ></input>
            </div>
          </Item>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <SwipeSlide data={data} />
        </Item>
      </Grid>
    </Box>
  );
}
