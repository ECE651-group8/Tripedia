import React, { useState } from 'react';
import { render } from 'react-dom';
import Masony from 'react-masonry-component';
import './Posts.css';

// Dome dummy content
const PHOTOS = [
    {
        imageUrl:
            'https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/757444/pexels-photo-757444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/2516406/pexels-photo-2516406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/1714455/pexels-photo-1714455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/2407265/pexels-photo-2407265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/3698534/pexels-photo-3698534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/2467670/pexels-photo-2467670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/2623690/pexels-photo-2623690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/3047993/pexels-photo-3047993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/239546/pexels-photo-239546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/4496891/pexels-photo-4496891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        imageUrl:
            'https://images.pexels.com/photos/8979525/pexels-photo-8979525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
];

// Masory Options
const masonryOptions = {
    fitWidth: false,
    columnWidth: 300,
    gutter: 30,
    itemSelector: '.photo-item',
};

async function getData() {
    const res = await fetch('http://localhost:8080/api/post', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'GET',
    });
    const json = await res.json();
    // console.log(data);
    return json;
}

function Posts() {
    const [post, setPost] = useState([]);
    const json = getData();
    json.then(item => {
        setPost(item);
    });

    return (
        <div>
            {/* <Masony
                className={'photo-list'}
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
                {PHOTOS.map(photo => (
                    <li className={`photo-item`}>
                        <img src={photo.imageUrl} alt="" />
                    </li>
                ))}
            </Masony> */}
            <div>00000</div>
            {post.map(item => (
                <div>{item.createTime}</div>
            ))}
            <div>11111</div>
        </div>
    );
}

export default Posts;
