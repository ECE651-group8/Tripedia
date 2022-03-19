import './Upload.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Avatar from '@mui/material/Avatar';

import AccessibilityIcon from '@mui/icons-material/Accessibility';

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

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';



import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from"@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/Notifications";


import ListAltIcon from "@mui/icons-material/ListAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PermIdentityIcon  from "@mui/icons-material/PermIdentity";
import BookmarkBorderIcon from "@mui/icons-material/Bookmark";
const Item = styled(Box )(({ theme }) => ({
  ...theme.typography.body2,
 
  
  
}));

const Input = styled('input')({
    display: 'none',
  });

export default function Detail() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Item>
          <Card sx={
              { bgcolor: 'rgb(242, 219, 174)',
          height: 350 }} >
        <CardHeader className="cardheader"

       avatar={
        // <Fab color="primary" aria-label="add">
        // <AddIcon />
        // </Fab>
        <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </Stack>
      }    
       title="Please set the travel header diagram"
       subheader="It is recommended to select a large hd image larger than 1680px, such as the original camera image"
    />
     
     <Box
      component="form"sx={{'& > :not(style)': {width: '130ch' , ml:15,},
    }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Fill in the travel book title" variant="outlined" /> 
    </Box>
      </Card>



          </Item>
        </Grid>
        <Grid item xs>
    <Item></Item>
  
  </Grid>
        <Grid item xs={7}
        
        sx={{ 
          
        
          width:4/5,
          ml:10,
          mt: 5,
      }}
        
        >
          <Item >
          <TextField
          id="standard-multiline-static"
          fullWidth label="Start your note from here..."
          multiline
          rows={15}
        //   defaultValue="Default Value"
          variant="standard"
        />

<Stack direction="row" spacing={30}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Post
      </Button>
    </Stack>


</Item>
        </Grid>


        <Grid item xs={4}>
          {/* <Item>
          <List sx={{ width: '100%', maxWidth: 360,ml:2, }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessTimeIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Upload picture"  />
      </ListItem>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessibilityIcon/>
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Upload emoji"  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Upload video"  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Upload music"  />
      </ListItem>
    </List>
        

            
          </Item> */}


<div className="sidebar">
            {/*Twitter icon */}
            

            <SidebarOption  active Icon={HomeIcon} text="import picture"/>
            <SidebarOption  Icon={SearchIcon} text="upload people"/>
            <SidebarOption  Icon={NotificationsNoneIcon} text="upload fee"/>
            <SidebarOption  Icon={MailOutlineIcon} text="upload loaction"/>
            <SidebarOption  Icon={BookmarkBorderIcon} text="upload date"/>
            

        </div>



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