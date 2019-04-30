import React from "react";
import "./style.css";

function CharacterCard(props) {
    return(
        <div className="card" key={props.id}>
            <div className="img-container">
                <img alt={props.name} src={props.image} value={props.id} onClick={() => props.characterSelected(props.id)}/>
            </div>
        </div>
    )
}

export default CharacterCard;