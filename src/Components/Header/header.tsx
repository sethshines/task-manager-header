import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center">
        <div className="nav navbar-nav">
            <a className="nav-item nav-link active" href="#" aria-current="page"><strong>Task Manager</strong> <span className="visually-hidden">(current)</span></a>
            <a className="nav-item nav-link" href="#">Home</a>
            <a className="nav-item nav-link" href="#">About</a>
            <a className="nav-item nav-link" href="#">Contact Me</a>
        </div>
    </nav>
  )
}