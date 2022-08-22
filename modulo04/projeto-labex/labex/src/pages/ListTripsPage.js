// Para vermos todas as viagens

import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoute from "../Coodinator/Coodinator";
import { useRequestData } from "../Hooks/UseRequestData";

export function ListTripsPage() {

	const navigate = useNavigate()

	const trip = useRequestData(
		"https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-borges-lamarr/trips"
	)
	
	const componenteTrip = trip.map((item) => {
    	return (
			<div key={item.id}>
      			<p>Nome: {item.name} </p> 
      			<p>Descrição:{item.description}</p> 
      			<p>Planeta: {item.planet} </p>
      			<p>Duração:{item.durationInDays} </p>
      			<p>Data: {item.date} </p> 
      			<hr/>   
    		</div>
		)
  	})

  	return (
    	<div>
      		<p>Lista de viagens</p>
      		<button onClick={()=>{MyRoute.goToApplicationForm(navigate)}}>Inscrever-se</button>
      		<div>
      			{componenteTrip}
      		</div>
    	</div>
  	)
}
