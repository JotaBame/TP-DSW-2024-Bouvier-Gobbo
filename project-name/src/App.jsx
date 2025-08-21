import './App.css'
import Benvenuti from './bienvenida_usuario';

function App() {
            
  return (
    <>
        <Benvenuti nombre="Juan" datos={["/fotojuan.jpg"]} />
        <Benvenuti nombre="Facu" datos={["/fotoreactfacu.jpg"]} />
        <div>
          <audio controls> <source src = "/HAY QUE AGARRAR LA PALA Y PONERSE A LABURAR.mp3" type="audio/mpeg" /></audio>
        </div>

        <input type="text" placeholder="Escribe algo aquí..." />
        <input type="text" placeholder="Escribe algo aquí..." />
    </>
  )
}

export default App
