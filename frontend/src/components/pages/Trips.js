import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import SwipeSlide from "../SwipeSlide";
import Spot from "../Spot";
import ImageCard from "../ImageCard";
import Footer from "../Footer";
import Navbar from "../Navbar";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function Trip() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <ImageCard />

      <Spot />

      <Footer />
    </Box>
  );
}
