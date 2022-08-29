// Para fazermos login como administrador
import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "../Hooks/UseForm"
import {Titulo,  Centralizar, BotaoClicar, Imput} from './style'

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
      		<Titulo>Login</Titulo>
            <Centralizar>

			<form onSubmit={fazerLogin}>
				<label htmlFor="email"/>
                <Imput
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required 
                />
                <label htmlFor="senha"/>
                <Imput
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
                <Centralizar>
				    <BotaoClicar onClick={voltar}>Voltar</BotaoClicar>
                    <BotaoClicar type="submit" >Enviar </BotaoClicar> 
                </Centralizar>
			</form>
            </Centralizar>
    	</div>
  	)
}