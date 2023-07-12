export default function NavBar() {
    return (
        <nav id="navbar" className="navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <div className="burger" id="burger">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </label>
        <label className="logo" onClick="location.href='../index'" />
        <ul className="nav-list">
          <li>
            <a href="../index">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="https://ninadnaik.in" target="_blank">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
      
    )
  }