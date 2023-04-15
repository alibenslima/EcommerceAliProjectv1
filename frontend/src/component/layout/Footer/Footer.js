import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>TÉLÉCHARGEZ NOTRE APPLICATION</h4>
        <p>Télécharger l'application pour téléphone mobile Android et IOS</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>BestDeal.</h1>
        <p>La haute qualité est notre première priorité</p>

        <p>Copyrights 2023 &copy; BestDeal</p>
      </div>

      <div className="rightFooter">
        <h4>Suivez-nous</h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="http://youtube.com/">Youtube</a>
        <a href="https://www.facebook.com/profile.php?id=100080005737007">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
