import React, { Component } from "react";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper/index.js";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

// Function for randomizing the cards
const randomizeCards = (array) => {
    let characterNumber = array.length;
    while (characterNumber > 0) {
        let index = Math.floor(Math.random() * characterNumber);
        characterNumber--;
        let temporaryPlaceHolder = array[characterNumber];
        array[characterNumber] = array[index];
        array[index] = temporaryPlaceHolder;
    }
    return array
}

class Character extends Component {
    state = {
        characters,
        score: 0,
        highScore: 0,
        gameOver: false,
        selectedCharacters: []
    };

    componentDidMount() {
        // neeed to figure out to put on the on mount function
    }

    characterSelected = (id) => {
        if(!this.state.selectedCharacters.includes(id)) {
            console.log('This Character is Selected');
            this.scoreIncrement();
            this.state.selectedCharacters.push(id);
            this.setState({ gameOver: false })
        } else {
            console.log('This character was already selected');
            this.newGame();
        }
    }

    scoreIncrement = () => {
        let theScore = this.state.score + 1;
        // Winning scenerio 
        if ( theScore === this.state.characters.length) {
            this.setState({
                characters,
                score: 0,
                highScore: theScore,
                gameOver: false,
                selectedCharacters: []
            });
        } else if ( theScore > this.state.highScore) {
            this.setState({
                highScore: theScore,
                score: theScore,
            });
        } else {
            this.setState({
                score: theScore
            });
        }
        this.resetCharacterCards();
    };

    newGame = () => {
        this.setState({
            score: 0,
            theScore: 0, 
            highScore: this.state.highScore,
            selectedCharacters: [],
            characters,
            gameOver: true
        });
        this.resetCharacterCards();
    }

    resetCharacterCards = () => {
        let newCardLayout = randomizeCards(characters);
        this.setState({ characters: newCardLayout});
    }

    render() {
        return (
            <div>
            <Navbar 
                score={this.state.score}
                highScore={this.state.highScore}
            />
            <Jumbotron />
            <Wrapper>
                {this.state.characters.map(character => (
                    <CharacterCard 
                        characterSelected={this.characterSelected}
                        id={character.id}
                        key={character.id}
                        name={character.name}
                        image={character.image}
                    />
                ))}
            </Wrapper>
            </div>
        )
    }
}

export default Character;
