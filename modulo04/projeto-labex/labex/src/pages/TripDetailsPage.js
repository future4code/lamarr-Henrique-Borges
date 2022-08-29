import React from "react";
import { useEffect, useState } from "react"
import { useProtectedPage } from "../Hooks/useProtectedPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Titulo,  Centralizar,ComponentListTrip, BotaoClicar} from './style'

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
	console.log(candidates)
	const componenteCandidate = candidates.map((item) => {
    	return (
			<ComponentListTrip key={item.id}>
      			<p>Candidato: {item.name}, {item.age} Anos</p>
				<p>Profissão: {item.profession}</p>
				<p>Texto de candidatura: {item.applicationText}</p>
				<p>País: {item.country}</p>
      			<hr/>   
    		</ComponentListTrip>
		)
  	})

	const [approved, setApproved] = useState([])
	const componenteApproved = approved.map((item) => {
    	return (
			<ComponentListTrip key={item.id}>
      			<p>Candidato: {item.name}, {item.age} Anos</p>
				<p>Profissão: {item.profession}</p>
				<p>Texto de candidatura: {item.applicationText}</p>
				<p>País: {item.country}</p>
      			<hr/>   
    		</ComponentListTrip>
		)
  	})

	return (
    	<div>
			<div>
    			<Titulo>{name}</Titulo>

				<Centralizar>
					<div>
						<p>Nome: {name}</p>
						<p>Descrição: {description}</p>
						<p>Planeta: {planet}</p>
						<p>Duração: {durationInDays}</p>
						<p>Data: {date}</p>
					</div>
				</Centralizar>
			</div>

			<Centralizar>
				<BotaoClicar onClick={voltar}>Voltar</BotaoClicar>
			</Centralizar>

			<div>
				<Titulo>Candidatos Pendentes</Titulo>
				{componenteCandidate}
			</div>
			
			<div>
				<Titulo>Candidatos Aprovados</Titulo>
				{componenteApproved}
			</div>
    	</div>
  	)
}