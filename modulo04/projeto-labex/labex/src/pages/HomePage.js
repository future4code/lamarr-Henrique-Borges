import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoute from "../Coodinator/Coodinator";
import {Titulo,  Centralizar, BotaoClicar} from './style'

export function HomePage() {
  
	const navigate = useNavigate()

  	return (
    	<div>
      		<Titulo>LabeX</Titulo>
			  <Centralizar>
      		<BotaoClicar onClick={()=>{MyRoute.goToListTrips(navigate)}}>Ver Viagens</BotaoClicar>
      		<BotaoClicar onClick={()=>{MyRoute.goToLogin(navigate)}}>Área de Admin</BotaoClicar>
			  </Centralizar>
    	</div>
  	)
}
