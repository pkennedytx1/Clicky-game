import React from "react";

function Navbar () {
    return (
        <nav className="navbar navbar-dark bg-primary ">
            <a className="navbar-brand" href="#">
                <h3><strong>Avatar Memory Game</strong></h3>
            </a>
            <ul class="nav">
                <li class="nav-item">
                    <h3 class="nav-link"><strong>Score: 0</strong></h3>
                </li>
                <li class="nav-item">
                    <h3 class="nav-link"><strong>High-Score: 0</strong></h3>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;