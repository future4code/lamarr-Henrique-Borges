import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoute from "../Coodinator/Coodinator";

export function HomePage() {
  
	const navigate = useNavigate()

  	return (
    	<div>
      		<h1>LabeX</h1>
      		<button onClick={()=>{MyRoute.goToListTrips(navigate)}}>Ver Viagens</button>
      		<button onClick={()=>{MyRoute.goToAdminHome(navigate)}}>Área de Admin</button>
    	</div>
  	)
}
