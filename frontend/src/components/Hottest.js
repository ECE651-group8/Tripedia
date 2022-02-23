import React from "react";
import './Hottest.css';
import HottestTitle from './HottestTitle'
import HottestCard from './HottestCard'
import HottestText from './HottestText'

function Hottest(){
    return (
       <div className="hottest">
            {/* HottestTitle */}
            <HottestTitle />  

            {/* HottestCard */}
            <HottestCard /> 
            <HottestCard /> 

            {/*HottestText*/}
            <HottestText />
            <HottestText />


       </div>
    );
}
export default Hottest;