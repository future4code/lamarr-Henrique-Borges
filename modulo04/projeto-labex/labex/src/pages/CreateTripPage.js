import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../Hooks/UseForm";
import { useProtectedPage } from "../Hooks/useProtectedPage";


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
      		<h1>Criar nova Viagem</h1>
			<form  onSubmit={criarViagem}>
				<label htmlFor="nome"/>
                <input
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
                <select
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
                </select>
				<label htmlFor="data"/>
                <input
                    name="date"
                    id="data"
                    value={form.date}
                    onChange={onChange}
                    type="date"
					min={dataAtual}
                    required
                />
				<label htmlFor="descricao"/>
                <input
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
                <input
                    name="durationInDays"
                    id="dias" 
                    placeholder="Duração em Dias"
                    value={form.durationInDays}
                    onChange={onChange}
                    type="number"
					min="50"
                    required
                />
                 <button onClick={voltar}>Voltar</button>
				<button type="submit"> Enviar </button> 
			</form>
    	</div>
  	)
}
