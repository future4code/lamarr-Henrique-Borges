// Para fazermos login como administrador
import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "../Hooks/UseForm"

export function LoginPage() {

	const navigate = useNavigate()
	const voltar = () => {
		navigate(-1)
	}

    const [form, onChange, clear] = useForm({ email: "", password: "" })

	const  url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-borges-lamarr/login"

    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(url,form).then(response => {
        	localStorage.setItem("token", response.data.token)
            navigate("/AdminHome")

        }).catch((error) =>{
			alert("Email ou Senha incorretos.", error)
		})
		clear();
    }

	return (
    	<div>
      		<h1>Login</h1>
			<form onSubmit={fazerLogin}>
				<label htmlFor="email"/>
                <input
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required 
                />
                <label htmlFor="senha"/>
                <input
                    name="password"
                    id="senha"
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    pattern="^.{3,}$"
                    title="mínimo de 3 caracteres"
                    required
                />
				<button onClick={voltar}>Voltar</button>
                <button type="submit" >Enviar </button> 
			</form>
    	</div>
  	)
}