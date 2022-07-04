import React from "react";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {
    return (
        <div class="social-container">
            <h3>Follow us on:</h3>
            <a href="https://www.youtube.com/"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <p className="copyright">&copy; all rights reserved;</p>
        </div>
    );
}

export default SocialFollow