import React, { Component } from 'react';
import SwipeSlide from '../SwipeSlide';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
    {
        url: 'https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg',
    },
    {
        url: 'https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg',
    },
    {
        url: 'https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg',
    },
    {
        url: 'https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg',
    },
    {
        url: 'https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg',
    },
    {
        url: 'https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg',
    },
    {
        url: 'https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg',
    },
];

export default class App extends Component {
    render() {
        return (
            <>
                <SwipeSlide title="Trending Trips" data={data} />
            </>
        );
    }
}
