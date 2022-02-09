import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';



import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const Item = styled(Box )(({ theme }) => ({
  ...theme.typography.body2,
 
  
  
}));

export default function Detail() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
          <Card >
          <CardMedia
          component="img"
          height="194"
          image="https://www.banfftours.com/wp-content/uploads/2017/08/Banff-Ave-and-Town-in-Winter-1140x530.jpg"
          alt="Paella dish"
        />
      <CardHeader
        avatar={
  
          <Avatar src="https://images.pexels.com/photos/4496891/pexels-photo-4496891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" sx={{ width: 77, height: 77 }}>
                
          </Avatar>
        
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="by Suzanne R, Brooklyn, New York"
        subheader="Jan 19, 2021"
        co
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        From Central Park on down to Lady Liberty--and everything around and in between--here are the key things to see on a visit to New York City.
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
        <Grid item xs>
    <Item></Item>
  </Grid>
        <Grid item xs={7}>
          <Item>Toronto Island was a lot of fun. I took a walk through the island and enjoyed myself. I found an app called paint by the numbers battle app when I was sitting down on the beach. That kept me entertained. So it was fun.</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Time" secondary="Jan 9, 2021" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="4" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cost" secondary="$2000" />
      </ListItem>
    </List>
        

            
          </Item>
        </Grid>
        <Grid item xs>
    <Item></Item>
  </Grid>
      </Grid>
    </Box>
  );
}