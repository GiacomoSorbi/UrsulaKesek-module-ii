import React from 'react';
import "./Footer.css";
import Behance from "./Images/Behance.svg";
import Deviant from "./Images/Deviantart.svg";
import Dribbble from "./Images/Dribbble.svg";
import Github from "./Images/Github.svg";
import Pinterest from "./Images/Pinterest.svg";
import Snapchat from "./Images/Snapchat.svg";
import Twitter from "./Images/Twitter.svg";
import WhatsApp from "./Images/WhatsApp.svg";
import YouTube from "./Images/YouTube.svg";


const Footer=()=>(
    <div className="footer">
      <img className="beh" src={Behance} alt="behance-logo" />
      <img className="dev" src={Deviant} alt="deviantart-logo" />
      <img className="dri" src={Dribbble} alt="dribbble-logo" />
      <img className="git" src={Github} alt="github-logo" />
      <img className="pin" src={Pinterest} alt="pinterest-logo" />
      <img className="sna" src={Snapchat} alt="snapchat-logo" />
      <img className="twi" src={Twitter} alt="twitter-logo" />
      <img className="wha" src={WhatsApp} alt="whatsapp-logo" />
      <img className="you" src={YouTube} alt="youtube-logo" />

      </div>

)
export default Footer;
