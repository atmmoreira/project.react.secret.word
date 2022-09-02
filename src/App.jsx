// Import React
import React, { useCallback, useState, useEffect } from 'react';

// Import CSS
import './App.css';

// Import Components
import SecretWords from './components/SecretWords/SecretWords';
import StartGame from './components/StartGame/StartGame';
import EndGame from './components/EndGame/EndGame';

// Import Data Words
import { wordList } from './data/words';

// Stages of the game
const stages = [
  { id: 1, name: 'introductionGame' },
  { id: 2, name: 'startGame' },
  { id: 3, name: 'endGame' },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  // StartGame
  const startGame = () => {
    const { category, word } = getCategoryAndWord();

    // Create Array of Letters
    let lettersOfWord = word.split('').map((letter) => letter.toLowerCase());

    // Fill States
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(lettersOfWord);
    // Load Game
    setGameStage(stages[1].name);
  };

  // getCategoryAndWord by random
  const getCategoryAndWord = () => {
    const category =
      Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  };

  // Verify Letters
  const verifyLetters = () => {
    setGameStage(stages[2].name);
  };

  return (
    <>
      <div className='container text-center text-white'>
        <h1 className='text-uppercase mt-5'>Secret Word</h1>

        {gameStage === 'introductionGame' && (
          <SecretWords startGame={startGame} />
        )}
        {gameStage === 'startGame' && (
          <StartGame
            verifyLetters={verifyLetters}
            pickedCategory={pickedCategory}
            pickedWord={pickedWord}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === 'endGame' && <EndGame startGame={startGame} />}
      </div>
    </>
  );
}

export default App;
