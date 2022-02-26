import React from 'react';
import '../../App.css';
import Right from "../Right";
import Hottest from "../Hottest"
import './Post.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
    </Box>
  );
}


