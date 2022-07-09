import React, { useState } from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components';
import './style.css'

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    //screen reader only
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  input {
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 220px;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
  }

  button:hover {
    cursor: pointer;
    color: #DD2A7B;
  }
`

function App() {

  // estados:
  const [inputNomeUsuario, setInputNomeUsuario] = useState("")
  const [inputFotoUsuario, setInpuFotoUsuario] = useState("")
  const [inputFotoPost, setInpuFotoPost] = useState("")

  const [arrayPost, setArrayPost] = useState([
    {nomeUsuario:'paulinha',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150',
    },
    {nomeUsuario:'walter',
    fotoUsuario:'https://avatarfiles.alphacoders.com/316/thumb-150-316348.jpg',
    fotoPost:'https://images6.alphacoders.com/108/thumbbig-1087632.webp',
    },
    {nomeUsuario:'jimmy mcgill',
    fotoUsuario:'https://avatarfiles.alphacoders.com/625/thumb-150-62581.jpg',
    fotoPost:'https://picfiles.alphacoders.com/171/thumb-171222.png'
    }
  ])

  // eventos
  const handleInputNomeUsuario = (e) => {
    setInputNomeUsuario(e.target.value)
  }
  
  const handleInputFotoUsuario = (e) => {
    setInpuFotoUsuario(e.target.value)
  }

  const handleInputFotoPost = (e) => {
    setInpuFotoPost(e.target.value)
  }

  // adicionar item
  const addPost = (e) => {
    e.preventDefault();

    const novoPost = {nomeUsuario:inputNomeUsuario, fotoUsuario:inputFotoUsuario, fotoPost:inputFotoPost}
    const novaListaDePosts = [...arrayPost, novoPost]
    setArrayPost(novaListaDePosts)
  }

  const listaPost = arrayPost.map((elemento, index)=> {
    return <Post
      nomeUsuario={elemento.nomeUsuario}
      fotoUsuario={elemento.fotoUsuario}
      fotoPost={elemento.fotoPost}
      key={index}
    />
  })
  
  console.log(listaPost)

  return(
    <div className='MainContainer'>
      <Form>
        <label>Nome de Usuário:</label>
        <input
          placeholder='Insira o nome de Usuário'
          value={inputNomeUsuario}
          onChange={handleInputNomeUsuario}
        />
        
        <label>foto de Usuario</label>
        <input
          placeholder='Insira o link de uma foto de Usuário'
          value={inputFotoUsuario}
          onChange={handleInputFotoUsuario}
        />

        <label>foto para Postar</label>
        <input
          placeholder='Insira o link de uma foto para Postar'
          value={inputFotoPost}
          onChange={handleInputFotoPost}
        />

        <button onClick={addPost}>Adicionar</button>
      </Form>      

      {listaPost}
    </div>
  )

}

export default App;