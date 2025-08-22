 import {Benvenuti, Recera, Buscacion} from './bienvenida_usuario';
import { BarraBusqueda } from './componentes_principales.jsx';
 
function App() {
  return (
    <>
      <div className={'top'}>
        <Benvenuti />
      </div>
        <BarraBusqueda/>
      
      <div className={'bottom'}>
        <Recera />
      </div>
    </>
  );
}

export default App
