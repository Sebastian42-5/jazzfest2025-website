import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className= "navbar">
      <ul className="navbar-list">
        <li>
          <Link className="navbar-btn" to="/">Home</Link>
        </li>
        {[...Array(10)].map((_, i) => (
          <li key={i}>
            <Link
              className="navbar-btn" to={`/day${i + 1}`}>
              Day {i + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
