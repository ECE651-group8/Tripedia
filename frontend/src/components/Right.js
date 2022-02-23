import React from 'react';
import Topbar from "./Topbar"
import Posts from './Posts';
import "./Right.css"

function Right() {
  return (
    <div className='right'>
        {/*<Topbar />*/}
        
        <Posts />
    </div>
  );
}

export default Right;
