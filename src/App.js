import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Character from "./Characters";

function App() {
    return (
    <div>    
        <Navbar />
        <Jumbotron />
        <Character />
    </div>    
    )
}

export default App;