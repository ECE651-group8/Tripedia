import React, { useState } from 'react';
import './Upload.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import IconButton from '@mui/material/IconButton';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

import AddCardIcon from '@mui/icons-material/AddCard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import axios from 'axios';
import { CatchingPokemonSharp } from '@mui/icons-material';
const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
}));

const Input = styled('input')({
    // display: 'none',
});

export default function Sidebar() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [visitornum, setVisitornum] = useState(0);
    const [cost, setCost] = useState(0);
    const [triptime, setTriptime] = useState('');
    const [imgurl, setImgurl] = useState('');
    // const [spotId, setspotId] = useState('');

    const fileSelectHandler = event => {
        setFile(event.target.files[0]);
    };

    const contentGetHandler = event => {
        setContent(event.target.value);
    };

    const titleGetHandler = event => {
        setTitle(event.target.value);
    };

    const costGetHandler = event => {
        setCost(event.target.value);
    };

    const triptimeGetHandler = event => {
        setTriptime(event.target.value);
    };

    const visitornumGetHandler = event => {
        setVisitornum(event.target.value);
    };
    // const spotIdGetHandler = event => {
    //     let select = document.getElementById('spot-select');
    //     // setspotId(select);
    //     // console.log(select.selectedIndex);
    // };

    const fileUploadHandler = async () => {
        const fd = new FormData();
        fd.append('file', file);
        const res = await axios.post('http://localhost:8080/api/file', fd);
        const url = res.data['publicURL'];
        setImgurl(url);
        console.log(imgurl);
        alert('upload picture success!');
    };

    const postUploadHandler = async () => {
        let res = await axios.post('http://localhost:8080/api/post/add', {
            title: title,
            content: content,
            tripTime: triptime,
            cost: cost,
            visitorNum: visitornum,
            brief: true,
        });
        const postId = res.data.split('postId=')[1].split(',')[0];
        res = await axios.post('http://localhost:8080/api/image/add', {
            imageUrl: imgurl,
        });
        const imageId = res.data.split('imageId=')[1].split(',')[0];
        let url =
            'http://localhost:8080/api/image/assignpost/' +
            imageId +
            '/' +
            postId;
        res = await axios.get(url);
        console.log(res.data);

        let select = document.getElementById('spot-select');
        const spotId = select.selectedIndex;
        url =
            'http://localhost:8080/api/post/assignspot/' +
            postId +
            '/' +
            spotId;
        res = await axios.get(url);
        url =
            'http://localhost:8080/api/image/assignspot/' +
            imageId +
            '/' +
            spotId;
        res = await axios.get(url);

        url = 'http://localhost:8080/api/post/assignuser/' + postId + '/1';
        res = await axios.get(url);

        url = 'http://localhost:8080/api/image/assignuser/' + imageId + '/1';
        res = await axios.get(url);
        console.log(res.data);
    };

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#fcf7f8' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <Card
                            id="upload-card"
                            sx={{
                                height: 350,
                                backgroundImage:
                                    'url(https://c.wallhere.com/photos/d7/8b/1920x1138_px_building_Lake_Bled-597381.jpg!d)',
                            }}
                        >
                            <CardHeader
                                className="cardheader"
                                avatar={
                                    // <Stack direction="row" alignItems="center" spacing={5}>
                                    <div className="button-box">
                                        <label htmlFor="icon-button-file">
                                            <PhotoCamera className="color" />
                                        </label>

                                        <Button
                                            onClick={fileUploadHandler}
                                            className="button"
                                        >
                                            Upload
                                        </Button>
                                        <Input
                                            accept="image/*"
                                            id="icon-button-file"
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={fileSelectHandler}
                                        />
                                    </div>
                                }
                                title="Please set the travel header diagram"
                                subheader="It is recommended to select a large hd image larger than 1680px, such as the original camera image"
                            />

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': {
                                        width: '130ch',
                                        ml: 15,
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Fill in the travel book title"
                                    variant="outlined"
                                    onChange={titleGetHandler}
                                />
                            </Box>
                        </Card>
                    </Item>
                </Grid>

                <Grid xs={1}></Grid>
                <Item></Item>
                <Grid item xs={8} height="100%">
                    <Item>
                        <TextField
                            id="standard-multiline-static"
                            fullWidth
                            label="Start your note from here..."
                            multiline
                            rows={15}
                            variant="standard"
                            onChange={contentGetHandler}
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
                                <Button
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={postUploadHandler}
                                >
                                    Post
                                </Button>
                            </Stack>
                        </Box>
                    </Item>
                </Grid>

                <Grid item xs={3}>
                    <Box
                        sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}
                    >
                        <AddLocationIcon
                            sx={{
                                color: 'action.active',
                                mr: 7,
                                my: 0.5,
                                ml: 1,
                            }}
                        />
                        <select
                            class="form-control info-select"
                            id="spot-select"
                        >
                            <option selected="selected" value="1">
                                Aquarium
                            </option>
                            <option value="2">CN tower</option>
                            <option value="3">Royal Park</option>
                            <option value="4">Notre-Dame</option>
                            <option value="5">Banff</option>
                        </select>
                    </Box>

                    <Box
                        sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}
                    >
                        <AccessibilityNewIcon
                            sx={{
                                color: 'action.active',
                                mr: 7,
                                my: 0.5,
                                ml: 1,
                            }}
                        />
                        <TextField
                            id="input-with-sx"
                            label="Input visitor num"
                            variant="standard"
                            onChange={visitornumGetHandler}
                        />
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}
                    >
                        <AddCardIcon
                            sx={{
                                color: 'action.active',
                                mr: 7,
                                my: 0.5,
                                ml: 1,
                            }}
                        />
                        <TextField
                            id="input-with-sx"
                            label="Input fee"
                            variant="standard"
                            onChange={costGetHandler}
                        />
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'flex-end', my: 5 }}
                    >
                        <AccessTimeIcon
                            sx={{
                                color: 'action.active',
                                mr: 7,
                                my: 0.5,
                                ml: 1,
                            }}
                        />
                        <input
                            type="date"
                            id="input-with-time"
                            variant="standard"
                            onChange={triptimeGetHandler}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
