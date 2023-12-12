import { Link } from "react-router-dom";

function Header() {


  return (
    <header>
      <h1>My Portfolio Page</h1>
      <nav className="nav">
        <Link to="/">
          <div className="nav-text">HOME</div>
        </Link>
        <Link to="/about">
          <div className="nav-text">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="nav-text">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;