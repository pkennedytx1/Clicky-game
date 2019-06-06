# Avatar the Last Airbender Memory Game

This is a memory game which will test your ability to remember Avatar the Last Airbender chracters. Ultimately, this is a React web application designed to show my abilities to use the front end framework. This is made entirely with React. 

## Technologies

[React](https://reactjs.org/), JavaScript

## Installation

To install this app. Just clone the repo. Go to your command line in the terminal and run.

```bash
npm i
```

Once all of the dependencies are installed you can run the following command to start the application.

```bash
npm start
```

This will begin the development server. You can make changes as you see fit!

## Notable Features

The game loads the characters from a JSON file. From that data a card is generated for each character. These cards are lined up in aplhabetical order until a user clicks on the first card. At this time they will randomize and change position. 

![Showing the randomization of the characters](https://media.giphy.com/media/1YuTo8LRok7OtgFMv7/giphy.gif)

As you play you will notice a banner on top of the game which will change text as you play. 

![Showing the banner changing as you play](https://media.giphy.com/media/yv10heNexBjhUSpPhD/giphy.gif)

Also note that when you play your score will increase. Once you hit a wrong character it will reset your score to 0 and you highscore will remain.

![Showing the score functionality](https://media.giphy.com/media/iYmMNe3atWheuPLUE2/giphy.gif)

## Notable Parts of the Project

The most difficulat thing about this project was by far getting the props passing correctly to the elements. Also, creating the randomization function to change the cards position by index was challenging. The score calculator took some tinkering as well. I think the most notable feature from this whole project is rendering multiple cards from a json file. The data is far more compressed in a JSON and being able to mak through that data rather than saving a card for each character can save alot of memory and space when loading a web applicatoin. Some uses of this would be a product site which would could load information about multiple products simply using one card component.