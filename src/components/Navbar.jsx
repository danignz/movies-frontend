import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={(element) => (element.isActive ? "selected" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(element) => (element.isActive ? "selected" : "")}
            to="/new"
          >
            New
          </NavLink>
        </li>
        <li>
          <button onClick={() => navigate(-1)}>Go back</button>
        </li>
      </ul>
    </nav>
  );
}
