import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../Hooks/UseForm";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import {Titulo,  Centralizar, BotaoClicar, Imput,Select} from './style'


export function CreateTripPage() {
    useProtectedPage()

	const navigate = useNavigate()
    const voltar = () => {
		navigate(-1)
	}
	const data = new Date()
	const dia = String(data.getDate()).padStart(2, '0')
	const mes = String(data.getMonth() + 1).padStart(2, '0')
	const ano = data.getFullYear();
	const dataAtual = (`${ano}-${mes}-${dia}`)

	const [form, onChange, clear] = useForm({ 
        name: "", 
		planet: "",
		date: "",
		description: "",
		durationInDays: "", 
	})

	const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-borges-lamarr/trips"
	const token = localStorage.getItem("token")
    
    const config = {
        headers: {
          auth: token,
        }
    }
    console.log(config);
	const criarViagem = (event) => {
        event.preventDefault()
		
        axios.post(url, form, config).then((response) => {
            alert("Viagem adicionada com Sucesso!", response)
            console.log(response)

        }).catch((error) =>{
            alert("Preencha todos os campos corretamente.", error)
            
        })
        clear();
    }

	return (
    	<div>
      		<Titulo>Criar nova Viagem</Titulo>
            <Centralizar>

			<form  onSubmit={criarViagem}>
				<label htmlFor="nome"/>
                <Imput
                    name="name"
                    id="nome" 
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    type="text"
					pattern="^.{5,}$"
                    title="Mínimo de 5 caracteres"
                    required
                />
				<label htmlFor="planeta"/>
                <Select
                    name="planet"
                    id="planeta"
                    value={form.planet}
                    onChange={onChange}
                    required >
                    <option value={null}>Escolha um planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
					<option value="Vênus">Vênus</option>
					<option value="Terra">Terra</option>
					<option value="Marte">Marte</option>
					<option value="Júpiter">Júpiter</option>
					<option value="Saturno">Saturno</option>
					<option value="Urano">Urano </option>
					<option value="Netuno">Netuno</option>
                </Select>
				<label htmlFor="data"/>
                <Imput
                    name="date"
                    id="data"
                    value={form.date}
                    onChange={onChange}
                    type="date"
					min={dataAtual}
                    required
                />
				<label htmlFor="descricao"/>
                <Imput
                    name="description"
                    id="descricao" 
                    placeholder="Descrição"
                    value={form.description}
                    onChange={onChange}
                    type="text"
					pattern="^.{30,}$"
                    title="Mínimo de 30 caracteres"
                    required
                />
				<label htmlFor="dias"/>
                <Imput
                    name="durationInDays"
                    id="dias" 
                    placeholder="Duração em Dias"
                    value={form.durationInDays}
                    onChange={onChange}
                    type="number"
					min="50"
                    required
                />
                <Centralizar>
                    <BotaoClicar onClick={voltar}>Voltar</BotaoClicar>
				    <BotaoClicar type="submit"> Enviar </BotaoClicar> 
                </Centralizar>
			</form>
            </Centralizar>
    	</div>
  	)
}
