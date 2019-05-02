import React, { Component } from "react";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper/index.js";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Alert from "./components/Alert";
import Links from "./components/Links";

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
        selectedCharacters: [],
        alertType: "alert alert-primary",
        alertMessage: "Please click a character to begin!",
        successMessageCounter: 0
    };

    componentDidMount() {
        // neeed to figure out to put on the on mount function
    }

    characterSelected = (id) => {
        let counter = this.state.successMessageCounter;
        if(!this.state.selectedCharacters.includes(id)) {
            this.scoreIncrement();
            this.state.selectedCharacters.push(id);
            this.setState({ gameOver: false })
            this.setState({alertType: "alert alert-success"})
            
            // Code for Success Messages
            const allMessages =["Good job!", "Well done!", "One more down.", "Flameo!", "Nice one!", "Good memory!", "Wow, impressive", "Don't get cocky now!", "I'm impressed", "You might give guru Patik a run for his money!", "Getting harder?", "Just a few more!", "Dont't forget anyone!", "So, close!", "Avatar memory state!", "Goodjob! You got them all! Click a character to play again!"];
            let selectedMessage = [allMessages[counter]]
            this.setState({alertMessage: selectedMessage})
            this.setState({successMessageCounter: this.state.successMessageCounter + 1})
        } else {
            this.setState({alertType: "alert alert-danger"})
            this.setState({alertMessage: "Sorry, you already guessed this chracter. Please click a character to restart the game!"})
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
            gameOver: true,
            successMessageCounter: 0,
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
            <Jumbotron/>
            <Alert 
                alertType={this.state.alertType}
                alertMessage={this.state.alertMessage}
            />
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
            <Links />
            </div>
        )
    }
}

export default Character;
