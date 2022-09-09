import React from 'react';

function EndGame({ retry, score }) {
  return (
    <>
      <section>
        <div className='d-flex justify-content-center flex-column'>
          <div className='mb-4 d-flex justify-content-center align-items-center flex-column'>
            <h1 className='mx-1 text-danger mt-5'>GAME OVER</h1>
            <h5 className='mx-1 text-warning mb-5 text-uppercase'>
              Sua pontuação foi {score} pontos.
            </h5>
            <button
              type='submit'
              className='btn btn-outline-success text-uppercase'
              onClick={retry}
            >
              REINICIAR GAME
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default EndGame;
