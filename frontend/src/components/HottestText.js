import React from "react";
import './HottestText.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function HottestText(){
    return (
        <div className="hottestText">
            <Card className="all-hottest-card">
            <Card.Body className="hottest-card-text">
         
         <Card.Text>
           <div className="hottest-text">
           <p>#3. Toronto's CN Tower</p>
           <h> On the shores of Lake Ontario in Canada's biggest city is the iconic CN Tower, <br/>
               one of Canada's most famous landmarks.</h>
           <h1> 54K Likes</h1>
          </div>
         </Card.Text>      
         <Image src="https://www.planetware.com/photos-large/CDN/canada-ontario-toronto-cn-tower-2.jpg" className='img-thumbnail'
         alt='...'></Image>
         
       </Card.Body>
            </Card>
       </div>
    );
}
export default HottestText;