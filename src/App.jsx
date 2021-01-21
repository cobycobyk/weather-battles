import { useState, useEffect } from 'react';
import locationService from './utilities/locationService';
import scoreService from './utilities/scoreService';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');
  const [gameOver, setGameOver] = useState(true);
  const [highScores, setHighScores] = useState(null);
  const [locations, setLocations] = useState(null);

  const handleNewGame = async () => {
    let locations = await locationService.index()
    setLocations(locations);
    setScore(0);
    setGameOver(false);
  }

const handleGuess = async guess => {
  let winner = locations.first.main.temp >= locations.second.main.temp ? 'first' : 'second';
  if (winner === guess) {
    setScore(score + 1);
    let locations = await locationService.index();
    setLocations(locations);
  } else {
    handleNewGame();
  }
}

  return (
    <div className="App">
      <h1>Weather Game!</h1>
      {gameOver ? (
        <button onClick={handleNewGame}>New Game!</button>
      ) :(
        <>
        <h2>Current Score: {score}</h2>
        <h2>Which Place is Hotter?</h2>
        <div>
          <div>
            <div>
              {`${locations.cities[0].city}, ${locations.cities[0].state}`}
              <button onClick={() => handleGuess('first')}>This one!</button>
            </div>
            <div>
              {`${locations.cities[1].city}, ${locations.cities[1].state}`}
              <button onClick={() => handleGuess('second')}>This one!</button>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default App;
