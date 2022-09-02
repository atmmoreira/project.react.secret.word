import React from 'react';

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
          <div className='chooseLetter mb-4 d-flex justify-content-center align-items-center'>
            <span className='mx-1'>Sua Letra:</span>
            <input type='text' name='' id='' maxLength={1} size='2' />
            <button
              type='submit'
              className='btn btn-outline-light text-uppercase'
              onClick={verifyLetters}
            >
              Jogar
            </button>
          </div>
          <span>
            Você já usou as letras:
            {wrongLetters.map((letter) => `${letter}, `)}
          </span>
        </div>
      </section>
    </>
  );
}

export default StartGame;
