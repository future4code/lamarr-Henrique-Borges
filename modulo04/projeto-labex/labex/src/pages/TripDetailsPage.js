import React from "react";
import { useEffect, useState } from "react"
import { useProtectedPage } from "../Hooks/useProtectedPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function TripDetailsPage() {
	
	useProtectedPage()

	const navigate = useNavigate()
	const voltar = () => {
		navigate(-1)
	}

	useEffect(() => {
		
		const id = localStorage.getItem("id")
        const token = localStorage.getItem("token");
		const url= `https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-borges-lamarr/trip/${id}`
		
        axios.get(url,{headers: {auth: token}
        }).then((response) => {
        	setDetails(response.data.trip)
			seCandidates(response.data.trip.candidates)
			setApproved(response.data.trip.approved)
        }).catch((error) => {
        	console.log("Deu erro: ", error)
        })

    },[])

	const [details, setDetails] = useState([])
	const {date, description, durationInDays, id, name, planet} = details

	const [candidates, seCandidates] = useState([])
	const componenteCandidate = candidates.map((item) => {
		
    	return (
			<div key={item.id}>
      			<p>Candidato: {item.name}, {item.age} Anos</p>
				<p>Profissão: {item.profession}</p>
				<p>Texto de candidatura: {item.applicationText}</p>
				<p>País: {item.country}</p>
      			<hr/>   
    		</div>
		)
  	})

	const [approved, setApproved] = useState([])
	const componenteApproved = approved.map((item) => {
    	return (
			<div key={item.id}>
      			<p>Candidato: {item.name}, {item.age} Anos</p>
				<p>Profissão: {item.profession}</p>
				<p>Texto de candidatura: {item.applicationText}</p>
				<p>País: {item.country}</p>
      			<hr/>   
    		</div>
		)
  	})

	return (
    	<div>
			<div>
    			<h1>{name}</h1>
				<p>{name}</p>
				<p>{description}</p>
				<p>{planet}</p>
				<p>{durationInDays}</p>
				<p>{date}</p>
			</div>
			<button onClick={voltar}>Voltar</button>
			
			<div>
				<h2>Candidatos Pendentes</h2>
				{componenteCandidate}
			</div>
			
			<div>
				<h2>Candidatos Aprovados</h2>
				{componenteApproved}
			</div>
    	</div>
  	)
}