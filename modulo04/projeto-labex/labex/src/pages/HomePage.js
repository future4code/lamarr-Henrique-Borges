// Para o usuário escolher entre Área Administrativa e Lista de Viagens

import React from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate()

  function goToListTripsPage() {
    navigate("/ListTrips")
  }
  function goToAreaAdm() {
    navigate("/AdminHome")
  }

    return (
      <div>
        <p>Página Inicial</p>
        <button onClick={goToListTripsPage}>Ver Viagens</button>
        <button onClick={goToAreaAdm}>Área de Admin</button>
      </div>
    );
}