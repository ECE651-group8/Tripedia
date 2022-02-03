import React from 'react';
import '../../App.css';
import Right from "../Right";
import Hottest from "../Hottest"
import './Post.css'


export default function Post() {
  return (
  
    <div className='container'>
      

      <div className='trend'>
        <Hottest />
      </div>
      <div className='right'>
        <Right />
      </div>
      
    </div>
    
  );
}
