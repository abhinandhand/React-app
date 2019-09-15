import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Home</Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Machines
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/addMachine">Add Machines
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/users">Users
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/game">Game
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}