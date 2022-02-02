import React from "react";
import './HottestTitle.css';
import Card from 'react-bootstrap/Card';

function Hottest(){
    return (
       <div className="hottest">
        
       <Card className="all-hottest-card" >
       <div className="bg-image" >
      
       <Card.Img src="	https://www.banfftours.com/wp-content/uploads/2017/08/Banff-Ave-and-Town-in-Winter-1140x530.jpg" alt="Card image" />
       <div className="mask"></div>
       </div>
       <Card.ImgOverlay>
         <Card.Title>
          <div className="hottest-title">
           What is happening? 
          </div>
        </Card.Title>
        
        <Card.Text >
            <div className="hottest-content">
            <h1>#1. Banff</h1>
            <p>Last updated 3 mins ago</p>
            </div>
         
           
         
         </Card.Text>
         
       </Card.ImgOverlay>
     </Card>
       </div>
    );
}
export default Hottest;