import React from "react";

class Score extends React.Component {
    state = {
        score: 0,
        highScore: 0
    };
    
    scoreIncrement = () => {
        console.log('Hello');
        this.setState({ score: this.state.score + 1});
    };

}

export default Score;
