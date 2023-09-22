import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>Navbar</div>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
