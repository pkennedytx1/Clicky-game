import React from "react";

function Alert(props) {

    return(
        <div className={props.alertType} role="alert">
            <h4>{props.alertMessage}</h4>
        </div>
    )
}

export default Alert;