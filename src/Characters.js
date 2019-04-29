import React, { Component } from "react";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";

class Character extends Component {
    state = {
        characters
    };

    render() {
        return (
            <Wrapper>
                {this.state.characters.map(character => (
                    <CharacterCard 
                        id={character.id}
                        key={character.id}
                        name={character.name}
                        image={character.image}
                    />
                ))}
            </Wrapper>
        )
    }
}

export default Character;
