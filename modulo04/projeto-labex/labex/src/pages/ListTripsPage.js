// Para vermos todas as viagens

import React from "react";
import { useNavigate } from "react-router-dom";

export function ListraTripPage() {

  const navigate = useNavigate()

  function goToApplicationFormPage() {
    navigate("/ApplicaationForm")
  }
    return (

      <div>
        <p>Lista de viagens</p>
        <button onClick={goToApplicationFormPage}>Inscrever-se</button>
      </div>
    );
}