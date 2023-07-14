import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {fa} from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h4>Find my Inbox</h4>
        <p>
        <a href="mailto:ninadnaik07&#64;gmail&#46;com">{'\u006e\u0069\u006e\u0061\u0064\u006e\u0061\u0069\u006b\u0030\u0037\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d'}</a>.
        </p>
      </div>
      <div className="follow-me">
        <h4>Follow Me</h4>
        <div className="social-links">
        <a href="https://instagram.com/ninadnaik07" target="_blank">
        <i><FontAwesomeIcon icon={faInstagram}/></i>
        </a>
        <a href="https://twitter.com/ninadnaik07" target="_blank">
        <i><FontAwesomeIcon icon={faTwitter} /></i>
        </a>
        <a href="https://github.com/ninadnaik10" target="_blank">
        <i><FontAwesomeIcon icon={faGithub} /></i>
        </a></div>
      </div>
      <div className="footer-end">
        {/* <p>
          Images by{" "}
          <a href="https://unsplash.com" target="_blank">
            Unsplash.com
          </a>
        </p> */}
        <ul className="copyright">
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link> ·&nbsp;
          </li>
          <li> © 2023 Ninad Naik</li>
        </ul>
      </div>
    </footer>
  );
}
