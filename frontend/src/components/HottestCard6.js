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
           <p>#8. Old Montreal</p>
           <h> lined with lovely historic buildings, is a place to go for great shopping and fine dining. </h>
           <h1> 20K Likes</h1>
          </div>
         </Card.Text>      
         <Image src="https://www.planetware.com/wpimages/2021/06/canada-tourist-attractions-montreal-rue-st-paul-morning.jpg" className='img-thumbnail'
         alt='...'></Image>
         
         
       </Card.Body>
     </Card>
       </div>
    );
}
export default HottestCard;