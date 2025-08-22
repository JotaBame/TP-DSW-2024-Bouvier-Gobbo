function Benvenuti() {
  return (
    <>
      {' '}
      <img src="moai.png" alt="img" width={150} height={150} className="logo" />
      <span> Bizz Fitness</span>
      <span className="desc"> Come para verte como un stardust crusader</span>
      <div style={{ marginLeft: 'auto' }}>
        <a
          href="https://chatgpt.com/"
          className="button"
          style={{ backgroundColor: 'gray' }}
        >
          Registrarse
        </a>
        <span>
          <a
            href="https://chatgpt.com/"
            className="button"
            style={{ marginRight: '40px', backgroundColor: '#4c2102ff' }}
          >
            Iniciar Sesión
          </a>
        </span>
      </div>
    </>
  );
}

function Buscacion(){

          <input type="text" placeholder="Busca tus recetas" />;

}

function Recera() {
  return (
    <>
      <div>La Receta del Dia es:</div>

      <div>
        <img src="cheese.png" width={'50%'} height={'50%'} />
      </div>
    </>
  );
}

export { Benvenuti, Buscacion, Recera };
