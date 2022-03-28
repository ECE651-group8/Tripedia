import React from "react";
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';




function Footer(){
    return (
        <div className="footer">

        
        
            <p>Get connected with us on social networks:</p>
            <div>
                <FacebookIcon/><GitHubIcon/><InstagramIcon/><MailOutlineIcon/>
          
            </div>
            <p><i className='fas fa-gem me-3'></i>Team 8 :Forever bling bling Team</p>
            <p>Ting,Ziyi,Hongyi,Yancy,Lia,Xiongyi </p>
            <p><i className='fas fa-home me-3'></i>Davis Cneter,3586, Waterloo,CA</p>
            <p><i className='fas fa-envelope me-3'></i>TingGu@uwaterloo.com</p>
            <p>© 2022 Copyright:<a className='text-reset fw-bold' href='https://perfactTeam8.com/'>perfactTeam8.com</a></p>
        
        
      </div>
    );
}
export default Footer;