import React from 'react';

function EndGame({ startGame }) {
  return (
    <>
      <section>
        <div className='d-flex justify-content-center flex-column'>
          <div className='mb-4 d-flex justify-content-center align-items-center flex-column'>
            <h1 className='mx-1 text-danger mt-5'>BEM VINDO, VAMOS JOGAR?</h1>
            <button
              type='submit'
              className='btn btn-outline-success text-uppercase'
              onClick={startGame}
            >
              INICIAR GAME
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default EndGame;
