import React from "react";
import "./Footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="contact-line">
        <h3>
          Get connected with us on social networks:&nbsp;&nbsp;&nbsp;
          <div className="Icon-footer">
            <a href="https://www.facebook.com/university.waterloo/">
              <FacebookIcon className="icon" />
            </a>
            <a href="https://www.instagram.com/uofwaterloo/">
              <InstagramIcon className="icon" />
            </a>
            <a href="https://uwaterloo.ca/engineering/">
              <LocalPhoneIcon className="icon" />
            </a>
            <a href="https://github.com/ECE651-group8/Tripedia">
              <GitHubIcon className="icon" />
            </a>
            <a href="mailto:y3372li@uwaterloo.ca">
              <MailIcon className="icon" />
            </a>
          </div>
        </h3>
      </div>
      <hr />
      <div className="row">
        {/* Columu1 */}
        <div className="col">
          <h2>Company Name</h2>
          <br />
          <h4>Team 8 is perfect team</h4>
          <h4> Find our website at</h4>
          <h4>WWW.Tripedia.school</h4>
        </div>
        {/* Columu2 */}
        <div className="col">
          <h2>Group Mumber</h2>
          <br />
          <h4>Ting Gu</h4>
          <h4>Hongyi Shi</h4>
          <h4>Ziyi Xu</h4>
        </div>
        {/* Columu3 */}
        <div className="col">
          <h2>Group Mumber</h2>
          <br />
          <h4>Yang Li</h4>
          <h4>Herong Wang</h4>
          <h4>Xiongyi Xu</h4>
        </div>
        {/* Columu1 */}
        <div className="col">
          <h2 id="footer-text">Contact Us</h2>
          <br />
          <div className="Icon-footer-right">
            <LocationOnIcon />
            <h4>DC,Uwaterloo,ON,CA</h4>
          </div>

          <div className="Icon-footer-right">
            <MailIcon />
            <h4> TingGu@Uwaterloo.ca</h4>
          </div>
          <div className="Icon-footer-right">
            <LocalPhoneIcon />
            <h4> +1 88888888</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="contact-line">
        <h3>
          &copy;{new Date().getFullYear()} UWaterloo | Group8 ECE651 Project |
          All right reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
