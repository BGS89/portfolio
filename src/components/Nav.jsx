import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Link style={{ textDecoration: "none" }} to="/">
          <li>Home</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/projects">
          <li>Projects</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
