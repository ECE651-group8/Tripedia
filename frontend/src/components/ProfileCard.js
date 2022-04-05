import React, { useState } from 'react';
import './ProfileCard.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
}));
var postid;
console.log(window.location.pathname.substring(8));
if (window.location.pathname.substring(1, 2) === 't') {
    postid = window.location.pathname.substring(10);
} else {
    postid = window.location.pathname.substring(8);
}

async function getData() {
    const res = await fetch('http://localhost:8080/api/post/' + postid, {
        headers: {
            'content-type': 'application/json',
        },
        method: 'GET',
    });
    const json = await res.json();
    console.log(json.images[0].imageUrl);
    const detail = [
        {
            userId: json.user.userId,
            img: json.images[0].imageUrl,
            user_url: json.user.avatarId,
            title: json.user.userName,
            date: json.postTime,
            summary: json.user.introduction,
        },
    ];
    return detail;
}

const detail = getData();

export default function ProfileCard() {
    const [post, setPost] = useState([]);
    detail.then(item => {
        setPost(item);
    });
    console.log(detail);
    return (
        <Item>
            {post.map(item => (
                <>
                    <Card sx={{ height: 350 }}>
                        <CardMedia
                            component="img"
                            height="350"
                            image={item.img}
                            alt="bgimg"
                            className="prof-img"
                        />
                    </Card>
                    <Card
                        sx={{
                            width: 4 / 5,
                            border: 1,
                            boxShadow: 1,
                            borderRadius: 2,
                            zIndex: 'modal',
                            ml: 17,
                            mt: 1,
                        }}
                    >
                        <CardHeader
                            avatar={
                                <a href={'/timeline/' + item.userId}>
                                    <Avatar
                                        src={item.user_url}
                                        sx={{ width: 77, height: 77 }}
                                    >
                                        {/* //用户 */}
                                    </Avatar>
                                </a>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={item.title}
                            subheader={item.date}
                        />

                        <CardContent>
                            <Typography
                                variant="body2"
                                color="rgb(217, 114, 54)"
                            >
                                {item.summary}
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
                </>
            ))}
        </Item>
    );
}
