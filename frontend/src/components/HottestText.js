import React from "react";
import './HottestText.css';
import Card from 'react-bootstrap/Card';



function HottestText(){
    return (
        <div className="hottestText">
            <Card className="all-hottest-card">
                <Card.Text >
                    <div className="hottest-text">
                        <p>#3. Toronto</p>
                        <h1> 25.4K Likes</h1>
                    </div>
                </Card.Text>
            </Card>
       </div>
    );
}
export default HottestText;