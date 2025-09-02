import { Link } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className= "navbar">
      <div 
        className={`sandwich${isOpen ? "active": ""}`}
        onClick={() => setIsOpen(!isOpen)}></div>
      <ul className={`navbar-list"${isOpen ? "active": ""}`}>
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
