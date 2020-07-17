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
      <p>Ursula Kesek made this website in Hackney in July 2020.</p>
      <div className="sm">
      <img className="beh" src={Behance} alt="behance-logo" a href= "https://www.behance.net/"target="_blank" rel="noopener noreferrer"/>
      <img className="dev" src={Deviant} alt="deviantart-logo" a href="https://www.deviantart.com/"target="_blank" rel="noopener noreferrer" />
      <img className="dri" src={Dribbble} alt="dribbble-logo" a href="https://dribbble.com/"target="_blank" rel="noopener noreferrer"/>
      <img className="fac" src={Facebook} alt="facebook-logo" a href="https://en-gb.facebook.com/"target="_blank" rel="noopener noreferrer" />
      <img className="git" src={Github} alt="github-logo" a href="https://github.com/"target="_blank" rel="noopener noreferrer"/>
      <img className="red" src={Reddit} alt="reddit-logo" a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer"/>
      <img className="sna" src={Snapchat} alt="snapchat-logo" a href="https://www.snapchat.com/"target="_blank" rel="noopener noreferrer" />
      <img className="twi" src={Twitter} alt="twitter-logo" a href="https://twitter.com/search-home?lang=en-gb"target="_blank" rel="noopener noreferrer" />
      </div>
      </footer>

)
export default Footer;
