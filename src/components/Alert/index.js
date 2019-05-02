import React from "react";
import "./style.css";

function Alert(props) {

    return(
        <div className={props.alertType} role="alert">
            <h4>{props.alertMessage}</h4>
        </div>
    )
}

export default Alert;