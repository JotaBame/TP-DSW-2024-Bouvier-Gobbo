import './componentes.css';

function Margen(){
    return (
        <div >    
                <img className='logo' src="/favicon.ico" alt="Logo de BizzFit" />
                <button className='boton'style={{position: 'absolute', right: '10px', top: '10px'}}>Inicie Sesion</button>
        </div>
    );
}

function Banner(){
    return(
    <div>
        <div className='banner'>
            <h1 >Acá va estar el banner con las recetas mayor reankeadas</h1>
        </div>
    </div>
    );
}

function BarraBusqueda(){
    return (
        <div className='contenedor'>
            <header>
                <h1 className='titulo'>BizzFit</h1>
            </header>
            <div >
                <input className="searchBox" id="busca" type="search" placeholder='Buscar recetas' />
                <button className='boton' >Buscar</button>
            </div>
        </div>
    );
}



export {BarraBusqueda,Margen,Banner};