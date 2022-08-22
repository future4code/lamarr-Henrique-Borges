// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição

import React from "react";
import axios from "axios";
import { useForm } from "../Hooks/UseForm";

export function ApplicationFormPage() {

	const [form, onChange, clear] = useForm({ 
		name: "", 
		// age: "", 
		// applicationText: "", 
		// profession: "",
		// country: "",
		// trip: ""
	})

	const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-douglas-lamarr/trips/:id/apply"

	const fazerInscricao = (event) => {
        event.preventDefault()
		
        axios.post(url, form)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
        clear();
    }

	return (
    	<div>
      		<p>Formulário de inscrição</p>
			<form onSubmit={fazerInscricao}>
                <label htmlFor="nome"> Nome: </label>
                <input
                    name="name"
                    id="nome" 
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    type="text"
					pattern="^.{3,}$"
                    title="mínimo de 3 caracteres"
                    required
                />
                <button type="submit"> Enviar </button> 
            </form>
    	</div>
	)
}