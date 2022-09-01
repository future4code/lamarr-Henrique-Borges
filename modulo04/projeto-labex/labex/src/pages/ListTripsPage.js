import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoute from "../Coodinator/Coodinator";
import { useRequestData } from "../Hooks/UseRequestData";
import {Titulo,  Centralizar, BotaoClicar, ComponentListTrip } from './style'

export function ListTripsPage() {

	const navigate = useNavigate()
	const voltar = () => {
		navigate(-1)
	}

	const [trip, isLoading, erro] = useRequestData(
		"https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-borges-lamarr/trips"
	)
	
	const componenteTrip = trip.map((item) => {
    	return (
			<ComponentListTrip key={item.id}>
      			<p>Nome: {item.name} </p> 
      			<p>Descrição: {item.description}</p> 
      			<p>Planeta: {item.planet} </p>
      			<p>Duração: {item.durationInDays} </p>
      			<p>Data: {item.date} </p>
      			<hr/>   
    		</ComponentListTrip>
		)
  	})

  	return (
    	<div>
			<Centralizar>

			<BotaoClicar onClick={voltar}>Voltar</BotaoClicar>
			<BotaoClicar onClick={()=>{MyRoute.goToApplicationForm(navigate)}}>Inscrever-se</BotaoClicar>
			</Centralizar>
      		<Titulo> Lista de viagens </Titulo>
			{isLoading && <p> Carregando...</p>} 
			{!isLoading && erro && <p> Ocorreu um erro</p>}
			{!isLoading && trip && trip.length > 0 && componenteTrip}
			{!isLoading && trip && trip.length === 0 && (<p>Não há nenhuma Viagem</p>)}
    	</div>
  	)
}

