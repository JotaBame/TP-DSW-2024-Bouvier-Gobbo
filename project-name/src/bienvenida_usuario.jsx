function Benvenuti ({nombre, datos}){
    const image = datos;
    return (
        <>
            <h1>Benvenuti {nombre}</h1>
                <p>Vamos a medier tu putoteria con mia intelichenta artifiale <br/>
                putolevelometro = ¡ {Math.floor(Math.random() * (100 - 20 + 1)) + 20} !</p>
             <img src={image} alt="img" />
        </>
    );
}

export default Benvenuti;
