import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotoPerfil from './img/douglas-e-miranha.jpg'
import logoEmail from './img/logo-email.png'
import logoEndereco from './img/logo-endereco.png'
import logoLabenu from './img/logo-labenu.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {fotoPerfil}
          nome="H Douglas" 
          descricao="Oi, eu sou Henrique Douglas. Sou estudante de desenvolvimento Web na Labenu."
        />
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem= {logoEmail}
          texto={'EMAIL: araujohdouglas@gmail.com'}
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem= {logoEndereco}  
          texto={'ENDEREÇO: Rua dos Caldeirões, Bairro Caldeirões'}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {logoLabenu} 
          nome="Labenu" 
          descricao="Estudante!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
