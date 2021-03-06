import React from "react";
import "./style.css";

function Navbar (props) {
    return (
        <nav className="navbar sticky-top navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                <h3><strong>Avatar Memory Game</strong></h3>
            </a>
            <ul className="nav">
                <li className="nav-item">
                    <h3 className="nav-link"><strong>Score: {props.score}</strong></h3>
                </li>
                <li className="nav-item">
                    <h3 className="nav-link"><strong>High-Score: {props.highScore}</strong></h3>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;