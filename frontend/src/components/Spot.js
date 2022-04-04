import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ReactMarkdown from 'react-markdown';
import './Spot.css';
console.log(window.location.pathname);
const spotid = window.location.pathname.substring(7);
console.log(spotid);
async function getData() {
    const res = await fetch('http://localhost:8080/api/spot/' + spotid, {
        headers: {
            'content-type': 'application/json',
        },
        method: 'GET',
    });
    const json = await res.json();
    console.log(json);
    return json;
}

const detail = getData();

export default function Spot() {
    const Item = styled(Box)(({ theme }) => ({
        ...theme.typography.body2,
    }));

    const [spot, setPost] = useState([]);
    detail.then(item => {
        setPost(item);
    });
    console.log(spot);
    return (
        <div className="card__container">
            <Grid container spacing={0}>
                <Grid item xs={8} height="100%">
                    <Item id="text-box">
                        <Card
                            sx={{
                                bgcolor: '#d3dce1',
                                height: 540,
                                border: 1,
                                boxShadow: 1,
                                borderRadius: 2,
                                zIndex: 'modal',
                                ml: 5,
                                mt: 5,
                            }}
                        >
                            <CardHeader
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={'About ' + spot.spotName}
                                subheader={spot.address}
                            />

                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    <ReactMarkdown>
                                        {spot.introduction}
                                    </ReactMarkdown>
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
                <Grid item xs={4} height="100%">
                    <Item>
                        <List
                            sx={{
                                ml: 0,
                                mt: 5,
                                border: 1,
                                boxShadow: 1,
                                borderRadius: 2,
                                width: '100%',
                                maxWidth: 400,
                                bgcolor: '#8696a6',
                            }}
                        >
                            <ListItem>
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe
                                            width="100%"
                                            height="500"
                                            id="gmap_canvas"
                                            src={spot.mapUrl}
                                            frameborder="0"
                                            scrolling="no"
                                            marginheight="0"
                                            marginwidth="0"
                                        ></iframe>
                                        <a href=" "></a>
                                    </div>
                                </div>
                            </ListItem>
                        </List>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}
