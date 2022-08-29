import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoute from "../Coodinator/Coodinator";
import { useRequestData } from "../Hooks/UseRequestData";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import axios from "axios";
import { useEffect} from "react"

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
			
			<div id="myDIV" key={item.id}>
      			<button onClick={idSelecionado}>  
					<p>{item.name}</p>   
				</button> 
				<button onClick={deletarViagem}> Excluir Viagem</button>
      			<hr/>  
				 
    		</div>
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
      		<h1>Painel Administrativo</h1>
			<button onClick={voltar}>Voltar</button>
      		<button onClick={()=>{MyRoute.goToCreateTrip(navigate)}}>Criar Viagens</button>
      		<button onClick={()=>{MyRoute.goToLogin(navigate)}}>Logout</button>
			{isLoading && <p> Carregando...</p>} 
			{!isLoading && erro &&  <p> Ocorreu um erro</p>}
			{!isLoading && trip && !isLoading && trip.length > 0  &&  !isLoading && nameTrip}
			{!isLoading && trip && !isLoading && trip.length === 0 && !isLoading && (<p>Não há nenhuma Viagem</p>)}
    	</div>
  	)
}
