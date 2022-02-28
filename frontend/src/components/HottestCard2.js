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
           <p>#4. Old Quebec </p>
           <h> Old Quebec is a UNESCO World Heritage Site and one of Canada's historic gems..</h>
           <h1> 44.5K Likes</h1>
          </div>
         </Card.Text>      
         <Image src="https://www.planetware.com/photos-large/CDN/canada-view-over-old-quebec.jpg" className='img-thumbnail'
         alt='...'></Image>
         
         
       </Card.Body>
     </Card>
       </div>
    );
}
export default HottestCard;