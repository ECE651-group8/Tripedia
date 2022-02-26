import React from "react";
import './HottestCard.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'



function HottestCard(){
    return (
       <div className="hottestCard">
       <Card.Link href= "/trips">
       <Card className="all-hottest-card">
       <Card.Body className="hottest-card-text">
       
         <Card.Text>
           
           <div className="hottest-text">
           <p>#2. BBBBB Montain</p>
           <h> Join us between 3 and 6 pm on our outdoor patio’s to win new Dakine Mittens.</h>
           <h1> 74.7K Likes</h1>
          </div>
         </Card.Text>      
         <Image src="	http://b1-q.mafengwo.net/s10/M00/C4/C4/wKgBZ1oJrZuAJkjzAAB_pvRLpwU13.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" className='img-thumbnail'
         alt='...'></Image>
       </Card.Body>
     </Card>
     </Card.Link>
       </div>
    );
}
export default HottestCard;