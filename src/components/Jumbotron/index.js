import React from "react";
import "./style.css";

function Jumbotron() {
    return(
        <div className="jumbotron jumbotron-fluid bg-clear text-center">
            <div className="container">
                <h1 className="display-4">Avatar the Last Airbender Memory Game</h1>
                <p className="lead">Try to remember which characters you have clicked and which ones you haven't!</p>
            </div>
        </div>
    )
}

export default Jumbotron;