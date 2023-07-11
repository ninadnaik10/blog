export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h4>Find my Inbox</h4>
        <p>
          <a href="mailto:contact@ninadnaik.in">contact@ninadnaik.in</a>
        </p>
      </div>
      <div className="follow-me">
        <h4>Follow Me</h4>
        <a href="https://instagram.com/ninadnaik07" target="_blank">
          <i className="fa fa-instagram" />
        </a>
        <a href="https://twitter.com/ninadnaik07" target="_blank">
          <i className="fa fa-twitter" />
        </a>
        <a href="https://github.com/ninadnaik10" target="_blank">
          <i className="fa fa-github" />
        </a>
      </div>
      <div className="footer-end">
        <p>
          Images by{" "}
          <a href="https://unsplash.com" target="_blank">
            Unsplash.com
          </a>
        </p>
        <ul className="copyright">
          <li>
            <a href="/privacy-policy">Privacy Policy</a> ·&nbsp;
          </li>
          <li> © 2022 Ninad Naik</li>
        </ul>
      </div>
    </footer>
  );
}
