import './App.css';
import Mensaje from './Mensaje.js'


const  App =()=> {
  const mensaje = 'Hola Mundo'
  return (
    <div className="App">
      <Mensaje color='red' message='tiutlo 1' />
      <Mensaje color='green' message='este es otro' />
      <Mensaje color='yellow' message='Estamos trabajando' />
      
    </div>
  );
}

export default App;
