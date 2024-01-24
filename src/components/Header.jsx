import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {


  return (
    <header className="nav-header">
      <nav className="nav">
      <AnchorLink href="#about">
          <div className="nav-text">ABOUT</div>
        </AnchorLink>  
        <AnchorLink href="#projects">
          <div className="nav-text">PROJECTS</div>
        </AnchorLink>
        <AnchorLink href="#contact">  
          <div className="nav-text">CONTACT ME</div>
        </AnchorLink>  
      </nav>
    </header>
  );
}

export default Header;


