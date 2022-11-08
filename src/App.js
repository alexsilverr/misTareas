
import './App.css';
import About from './componentes/About';


import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tarea">
      <div className ='freecodecamp-logo-contenedor'>
     
         <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
          
        
          

         </div>
         

      </div>
      <About />
      
    </div>
  );
}

export default App;
