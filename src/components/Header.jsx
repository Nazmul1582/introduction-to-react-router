import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>Navbar</div>
      <nav className="nav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
