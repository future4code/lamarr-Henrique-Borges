import React,{useState}from 'react'
import './style.css'


export function SecaoComentario(props) {

	const [inputComentar,setInputcomentar]=useState("")

	const handleInputComentar = (event) => {
		setInputcomentar(event.target.value)
	}

	return (
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={inputComentar}
				onChange={handleInputComentar}
			/>			
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
		
	)
}