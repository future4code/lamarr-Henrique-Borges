// Para o administrador ver a lista de viagens e poder deletá-las 
// ou acessar o detalhe de cada uma delas

import React from "react";
import { useNavigate } from "react-router-dom";

export function AdminHomePage() {

  const navigate = useNavigate()

  function goToCreateripPage() {
    navigate("/CreateTrip")
  }
  function goToTripDetailsPage() {
    navigate("/TripDetails")
  }
  function goToLoginPage() {
    navigate("/login")
  }
    
    return (
      <div>
        <p>Painel Administrativo</p>
        <button onClick={goToLoginPage}>Login</button>
        <button onClick={goToCreateripPage}>Criar Viagens</button>
        <button onClick={goToTripDetailsPage}>Detalhes das Viagens</button>
      </div>
    );
}