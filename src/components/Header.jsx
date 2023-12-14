import { Link } from "react-router-dom";

function Header() {


  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <div className="nav-text">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="nav-text">PROJECTS</div>
        </Link>
        <Link to="/contact">
          <div className="nav-text">CONTACT ME</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;