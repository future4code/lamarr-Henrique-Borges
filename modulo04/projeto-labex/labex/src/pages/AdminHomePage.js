import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoute from "../Coodinator/Coodinator";
import { useRequestData } from "../Hooks/UseRequestData";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import axios from "axios";
import { useEffect} from "react"
import {Titulo,  Centralizar, BotaoClicar,ComponentListAdmin, BotaoAdmin, BotaoEcluir } from './style'

export function AdminHomePage() {
	useProtectedPage()

	const navigate = useNavigate()
    const voltar = () => {
		navigate(-1)
	}

	const [trip, isLoading, erro] = useRequestData(
		"https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-borges-lamarr/trips",
		
	)
	
	const nameTrip = trip.map((item) => {

		const idSelecionado = () => {
			localStorage.setItem("id", item.id)
			navigate("/TripDetails")
		}
		const deletarViagem = () => {
			localStorage.setItem("idDel", item.id)
			document.getElementById("myDIV").style.display = "none"
			window.location.reload()
	
		}

    	return (
			
			<ComponentListAdmin id="myDIV" key={item.id}>
      			<BotaoAdmin onClick={idSelecionado}>  
					{item.name}   
				</BotaoAdmin> 
				<BotaoEcluir onClick={deletarViagem}> Excluir</BotaoEcluir>
    		</ComponentListAdmin>
		)
  	})

	useEffect(() => {
		const idDelete = localStorage.getItem("idDel")
        const token = localStorage.getItem("token");
		const url= `https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-borges-lamarr/trips/${idDelete}`
		
        axios.delete(url, {headers: {auth: token}
        }).then((response) => {
			console.log(response.data)
        }).catch((error) => {
        	console.log(error)
        })

    },[])

	return (
		<div>
      		<Titulo>Painel Administrativo</Titulo>
			<Centralizar>
			<BotaoClicar onClick={voltar}>Voltar</BotaoClicar>
      		<BotaoClicar onClick={()=>{MyRoute.goToCreateTrip(navigate)}}>Criar Viagens</BotaoClicar>
      		<BotaoClicar onClick={()=>{MyRoute.goToLogin(navigate)}}>Logout</BotaoClicar>

			</Centralizar>
			{isLoading && <p> Carregando...</p>} 
			{!isLoading && erro &&  <p> Ocorreu um erro</p>}
			{!isLoading && trip && !isLoading && trip.length > 0  &&  !isLoading && nameTrip}
			{!isLoading && trip && !isLoading && trip.length === 0 && !isLoading && (<p>Não há nenhuma Viagem</p>)}
    	</div>
  	)
}
