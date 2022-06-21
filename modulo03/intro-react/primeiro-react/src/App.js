import fotoPerfil from './img/douglas-e-miranha.jpg';
import './App.css';

function App() {
  function mensagem(){
    alert("Vasco da Gama, apenas!");
  }
  return (
    <div className="App">
        <h1>Olá! Eu sou Henrique Douglas!</h1>
        <img className='img-foto' src={fotoPerfil} alt="Foto Perfil"/>
        <p>Este é o meu primeiro site React</p>
        <button onClick={mensagem}>Aperte este botão</button>
    </div>
  );
}

export default App;
