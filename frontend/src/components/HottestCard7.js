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
           <p>#9. Polar Bears of Churchill, Manitoba</p>
           <h> One of Canada's most unique attractions is the polar bear migration that sees these beautiful creatures  </h>
           <h1> 14.5K Likes</h1>
          </div>
         </Card.Text>      
         <Image src="https://www.planetware.com/photos-large/CDN/canada-churchill-polar-bears.jpg" className='img-thumbnail'
         alt='...'></Image>
         
         
       </Card.Body>
     </Card>
       </div>
    );
}
export default HottestCard;