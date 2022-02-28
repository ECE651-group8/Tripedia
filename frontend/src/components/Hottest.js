import React from "react";
import './Hottest.css';
import HottestTitle from './HottestTitle'
import HottestCard from './HottestCard'
import HottestText from './HottestText'
import HottestCard2 from './HottestCard2'
import HottestCard3 from './HottestCard3'
import HottestCard4 from './HottestCard4'
import HottestCard5 from './HottestCard5'
import HottestCard6 from './HottestCard6'
import HottestCard7 from './HottestCard7'
function Hottest(){
    return (
       <div className="hottest">
            {/* HottestTitle */}
            <HottestTitle />  

            {/* HottestCard */}
            <HottestCard /> 
            <HottestText /> 
            <HottestCard2 /> 
            {/*HottestText*/}
            <HottestCard3 />
            <HottestCard4 />
            <HottestCard5 />
            <HottestCard6 /> 
            <HottestCard7/> 
            

       </div>
    );
}
export default Hottest;