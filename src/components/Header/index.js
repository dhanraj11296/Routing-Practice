import {Link} from 'react-router-dom'
import './index.css'
const Header = () => (
  <nav className="headerContainer">
    <div className="logoAndTitleContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="naveItemsList">
      <li className="linkItem">
        <Link className="routeLink" to="/">
          Home
        </Link>
      </li>
      <li className="linkItem">
        <Link className="routeLink" to="/about">
          About
        </Link>
      </li>
      <li className="linkItem">
        <Link className="routeLink" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
