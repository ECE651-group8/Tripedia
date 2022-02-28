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
           <p>#5. Whistler </p>
           <h> a famous ski resort of Whistler Blackcomb and the year-round resort destination of Whistler.</h>
           <h1> 34.3K Likes</h1>
          </div>
         </Card.Text>      
         <Image src="https://www.planetware.com/wpimages/2021/06/canada-top-tourist-attractions-whistler-mountain-skiers.jpg" className='img-thumbnail'
         alt='...'></Image>
         
         
       </Card.Body>
     </Card>
       </div>
    );
}
export default HottestCard;