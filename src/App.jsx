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

  // getCategoryAndWord by random
  const getCategoryAndWord = useCallback(() => {
    const category =
      Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  }, [words]);

  // StartGame
  const startGame = useCallback(() => {
    // Clear all States
    clearStates();

    const { category, word } = getCategoryAndWord();

    // Create Array of Letters
    let lettersOfWord = word.split('').map((letter) => letter.toLowerCase());

    // Fill States
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(lettersOfWord);
    // Load Game
    setGameStage(stages[1].name);
  }, [getCategoryAndWord]);

  // Verify Letters
  const verifyLetters = (userLetter) => {
    const normalizedLetter = userLetter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  // restart the game
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };

  const clearStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // Check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // reset States
      clearStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //  Check win condition
  useEffect(() => {
    const lettersUnique = [...new Set(letters)];

    if (guessedLetters.length === lettersUnique.length) {
      // setScore
      setScore((actualScore) => (actualScore += 100));
      // Resetar Game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

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
        {gameStage === 'endGame' && <EndGame retry={retry} score={score} />}
      </div>
    </>
  );
}

export default App;
