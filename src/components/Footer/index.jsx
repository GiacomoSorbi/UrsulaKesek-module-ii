import React from 'react';
import "./Footer.css";
import Behance from "./Images/Behance.png";
import Deviant from "./Images/Deviantart.png";
import Dribbble from "./Images/Dribbble.png";
import Facebook from "./Images/Facebook.png";
import Github from "./Images/Github.png";
import Reddit from "./Images/Reddit.png";
import Snapchat from "./Images/Snapchat.png";
import Twitter from "./Images/Twitter.png";


const Footer=()=>(
    <footer className="footer">
      <p> Built by Ursula Kesek, Hackney July 2020</p>
      <div className="sm">
      <img className="beh" src={Behance} alt="behance-logo" />
      <img className="dev" src={Deviant} alt="deviantart-logo" />
      <img className="dri" src={Dribbble} alt="dribbble-logo" />
      <img className="fac" src={Facebook} alt="facebook-logo" />
      <img className="git" src={Github} alt="github-logo" />
      <img className="red" src={Reddit} alt="reddit-logo" />
      <img className="sna" src={Snapchat} alt="snapchat-logo" />
      <img className="twi" src={Twitter} alt="twitter-logo" />
      </div>
      </footer>

)
export default Footer;
