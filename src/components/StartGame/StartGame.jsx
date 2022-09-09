import React, { useRef, useState } from 'react';

function StartGame({
  verifyLetters,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) {
  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetters(letter);
    setLetter('');
    letterInputRef.current.focus();
  };

  return (
    <>
      <div className='row'>
        <span>
          <b>Pontuação</b>: {score} pts
        </span>
      </div>

      <section className='guessWord'>
        <div className='row'>
          <h2 className='text-uppercase mt-3'>Advinhe a palavra</h2>
          <div className='d-flex justify-content-center flex-column'>
            <span className='tips text-uppercase'>
              Dica para palavra: {pickedCategory}
            </span>
            <span>Você ainda tem {guesses} tentativas.</span>
          </div>
        </div>
      </section>

      <section className='word d-flex justify-content-center m-5'>
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <div className='letters' key={index}>
              {letter}
            </div>
          ) : (
            <div className='letters' key={index}></div>
          )
        )}
      </section>

      <section>
        <div className='d-flex justify-content-center flex-column'>
          <form onSubmit={handleSubmit}>
            <div className='chooseLetter mb-4 d-flex justify-content-center align-items-center'>
              <span className='mx-1'>Sua Letra:</span>
              <input
                type='text'
                name=''
                id=''
                maxLength={1}
                size='2'
                required
                onChange={(e) => setLetter(e.target.value)}
                value={letter}
                ref={letterInputRef}
              />
              <button
                type='submit'
                className='btn btn-outline-light text-uppercase'
              >
                Jogar
              </button>
            </div>
          </form>
          <div>
            <span className='mx-1'>Você já usou as letras:</span>
            {wrongLetters.map((letter) => `${letter}, `)}
          </div>
        </div>
      </section>
    </>
  );
}

export default StartGame;
