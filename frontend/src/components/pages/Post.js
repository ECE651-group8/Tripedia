import React from 'react';
import '../../App.css';
import Right from "../Right";
import Hottest from "../Hottest"
import './Post.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Post() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Item>
            <Hottest/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <Right/>
          </Item>
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
                <i className='fas fa-home me-3'></i> Davis Center,3586, Waterloo,CA
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


