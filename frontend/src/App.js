import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trips from './components/pages/Trips';
import Post from './components/pages/Post';
import SignUp from './components/pages/SignUp';
import Detail from './components/pages/Detail';
import Timeline from './components/pages/Timeline';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/trips" element={<Trips />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/timeline" element={<Timeline />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
