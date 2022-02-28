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
           <p>#6. Ottawa's Parliament Hill </p>
           <h> Ottawa's Parliament Hill stands high above the Ottawa River.</h>
           <h1> 24.4K Likes</h1>
          </div>
         </Card.Text>      
         <Image src="https://www.planetware.com/photos-large/CDN/canada-ontario-ottawa-parliament-hill.jpg" className='img-thumbnail'
         alt='...'></Image>
         
         
       </Card.Body>
     </Card>
       </div>
    );
}
export default HottestCard;