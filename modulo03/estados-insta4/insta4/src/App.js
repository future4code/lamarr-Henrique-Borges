import React from 'react';
import Post from './components/Post/Post';
import Post_02 from './components/Post_02/Post_02';
import Post_03 from './components/Post_03/Post_03';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post_02
            nomeUsuario={'walter'}
            fotoUsuario={'https://avatarfiles.alphacoders.com/316/thumb-150-316348.jpg'}
            fotoPost={'https://images6.alphacoders.com/108/thumbbig-1087632.webp'}
          />
          <Post_03
            nomeUsuario={'jimmy mcgill'}
            fotoUsuario={'https://avatarfiles.alphacoders.com/625/thumb-150-62581.jpg'}
            fotoPost={'https://picfiles.alphacoders.com/171/thumb-171222.png'}
          />
  </div>
)

}


export default App;
