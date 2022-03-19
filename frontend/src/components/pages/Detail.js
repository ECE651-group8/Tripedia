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
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';



// const styles = theme => ({
//   CardHeader: {
//     sizing, maxHeight: 300,
//   }
// });

const Item = styled(Box )(({ theme }) => ({
  ...theme.typography.body2,
 
  
  
}));




export default function Detail() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
          <Card sx={{ height: 350 }} >
          <CardMedia
          component="img"
          height="350"
          image="http://p1-q.mafengwo.net/s19/M00/47/21/CoNHPmIaQKZYq2cWABA0PCwHNiI.png?imageMogr2%2Fstrip"
          alt="Paella dish"
          //这是前面班夫国家公园的东西，这边能不能合并在一起，并且上面有单独的 提示行来显示
        />
     
      </Card>

    <Card   sx={{ 
            width: 4/5,
            border: 1,
            boxShadow: 1,
            borderRadius: 2,
            zIndex: 'modal',
            ml: 17,
            mt: 1,
        }} >
         
        <CardHeader 
       
        avatar={
          <Avatar src="http://p1-q.mafengwo.net/s10/M00/8E/78/wKgBZ1nwuTiAR5z9AAWG6X5Chik43.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90" 
          sx={{ width: 77, height: 77 }}>
                {/* //用户 */}
          </Avatar>
        
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="by Suzanne R,  Ontario Science Center"
        subheader="Jan 19, 2021"
        
        />

      
     
      <CardContent>
        <Typography variant="body2" color="rgb(217, 114, 54)">
        Ontario Science Center is a natural science and technology museum, which is more suitable for children.<br/>
             There are a lot of scientifically interesting toys in it, and people who are innocence can find a lot of resonance here. 
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
        <Grid item xs={6}
        
        sx={{ 
          
          bgcolor:'rgb(242, 209, 109)',
          border: 1,
          boxShadow: 1,
          borderRadius: 2,
          mt: 2,
      }}
        
        >
          <Item >
             But you also have to have a certain face to "share" with children. There are too many children playing here, 
             and we are too embarrassed to "share" many facilities with the children. We only pass by silently, <br/>
             so we strolled around for a while and then went back to the hotel to rest.


It may be that the sun at noon is still a little poisonous, plus the excitement and lack of sleep last night, <br/>
we modified the itinerary and decided to take a lunch break at the hotel now. <br/>
It wasn't until after 4 pm that we started our journey again

Second stop, The Distillery District. <br/>This is really a great place to take pictures. <br/>
There are various photo spots nearby. Such as LOVE sign, Peace sign, etc. 
We also met a couple of newlyweds taking wedding photos here, and the beautiful atmosphere is beyond words. <br/>
There are all kinds of small shops along the road, selling all kinds of small boutiques. 
Here we meet a family of travelers from New York. He is an art performer. <br/>
He will have a performance in Toronto tomorrow, so he will bring his parents to visit. 
The most beautiful thing is that the family can share it together.





</Item>
        </Grid>


        <Grid item xs={3}>
          <Item>
          <List sx={{ borderRadius: 2,width: '100%', maxWidth: 360, bgcolor: 'rgb(242, 219, 174)',ml:2, }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessTimeIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Date" secondary="Jan 9, 2021" />
      </ListItem>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessibilityIcon/>
            
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
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary="Ontario Science Center" />
      </ListItem>
    </List>
        

            
          </Item>
        </Grid>
        <Grid item xs>
    <Item></Item>
  </Grid>
      </Grid>
      <Grid item xs={12}>
    <Item>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'style={{ backgroundColor: 'rgba(242, 224, 201)' }}>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <FacebookIcon/>
          <GitHubIcon/>
          <InstagramIcon/>
          <MailOutlineIcon/>
          
        </div>
      </section>

      <section className='footer' style={{ backgroundColor: 'rgba(242, 224, 201)' }} >
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
               <i className='fas fa-gem me-3'></i>Team 8 :Forever bling bling Team
              <h6 className='text-uppercase fw-bold mb-4'>
              </h6>
              <p>
                Ting,Ziyi,Hongyi,Yancy,Lia,Xiongyi
              </p>
            </div>
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
             
              <p>
                <i className='fas fa-home me-3'></i> Davis Cneter,3586, Waterloo,CA
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                TingGu@uwaterloo.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(242, 224, 201)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://perfactTeam8.com/'>
        perfactTeam8.com
        </a>
      </div>
    </Item>
  </Grid>
    </Box>
  );
}