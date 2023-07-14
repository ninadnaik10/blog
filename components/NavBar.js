import Link from 'next/link'

export default function NavBar() {
    return (
        <nav id="navbar" className="navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="burgerLabel">
          <div className="burger" id="burger">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </label>
        <Link href="/"><div className="logo"></div></Link>
        <ul className="nav-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* <li>
            <a href="/blog">Blog</a>
          </li> */}
          <li>
            <a href="https://ninadnaik10.github.io">About</a>
          </li>
          {/* <li>
            <a href="https://ninadnaik.in" target="_blank">
              Portfolio
            </a>
          </li> */}
        </ul>
      </nav>
      
    )
  }