import React from "react";
import './HottestCard.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'



function HottestCard(){
    return (
       <div className="hottestCard">
       <Card className="all-hottest-card">
       <Card.Body className="hottest-card-text">
         
         <Card.Text>
           <div className="hottest-text">
           <p>#7.. Signal Hill National Historic Site</p>
           <h> John's harbor, overlooking the city and sea, is Signal Hill National Historic Site. </h>
           <h1> 24.5K Likes</h1>
          </div>
         </Card.Text>      
         <Image src="https://www.planetware.com/photos-large/CDN/canada-newfoundland-st-johns-signal-hill-view.jpg" className='img-thumbnail'
         alt='...'></Image>
         
         
       </Card.Body>
     </Card>
       </div>
    );
}
export default HottestCard;