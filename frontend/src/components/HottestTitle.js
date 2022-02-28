import React from "react";
import './HottestTitle.css';
import Card from 'react-bootstrap/Card';

function Hottest(){
    return (
      <div className="hottestTitle">
        
        <Card className="all-hottest-card" >
          <div className="bg-image" >
      
            <Card.Img src="	https://www.banfftours.com/wp-content/uploads/2017/08/Banff-Ave-and-Town-in-Winter-1140x530.jpg" alt="Card image" />
          
            <div className="mask"></div>
          </div>
            <Card.ImgOverlay>
              <Card.Title>
                <div className="hottest-title">
                  What's the hottest place? 
                </div>
              </Card.Title>
        
              <Card.Text >
                <div className="hottest-content">
                  <h1>#1. Banff National Park </h1>
                  <p>Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta,<br/>
                   and showcases some of Canada's most beautiful scenery.</p>
                </div>
              </Card.Text>
         
            </Card.ImgOverlay>
        </Card>
      </div>
    );
}
export default Hottest;