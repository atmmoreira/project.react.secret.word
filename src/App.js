import './App.css';

function App() {
  return (
    <>
      <div className='container text-center text-white'>
        <div className='row mt-5'>
          <span>
            <b>Pontuação</b>: 100 pts
          </span>
        </div>

        <section className='guessWord'>
          <div className='row'>
            <h2 className='text-uppercase mt-3'>Advinhe a palavra</h2>
            <div className='d-flex justify-content-center flex-column'>
              <span className='tips text-uppercase'>
                Dica para palavra: computador
              </span>
              <span>Você ainda tem 03 tentativas.</span>
            </div>
          </div>
        </section>

        <section className='word d-flex justify-content-center m-5'>
          <div className='letters'>a</div>
          <div className='letters'>m</div>
          <div className='letters'>o</div>
          <div className='letters'>r</div>
        </section>

        <section>
          <div className='d-flex justify-content-center flex-column'>
            <span className='chooseLetter mb-4'>
              Sua Letra: <input type='text' name='' id='' min={1} size='2' />
            </span>
            <span>Você já usou as letras: q, b, c.</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
