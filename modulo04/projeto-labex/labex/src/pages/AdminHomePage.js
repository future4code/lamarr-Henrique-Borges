// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoute from "../Coodinator/Coodinator"

export function AdminHomePage() {

  const navigate = useNavigate()
    
  return (
    <div>
      <p>Painel Administrativo</p>
      <button onClick={()=>{MyRoute.goToCreateTrip(navigate)}}>Criar Viagens</button>
      <button onClick={()=>{MyRoute.goToTripDetails(navigate)}}>Detalhes das Viagens</button>
      <button onClick={()=>{MyRoute.goToLogin(navigate)}}>Login</button>
    </div>
  );
}