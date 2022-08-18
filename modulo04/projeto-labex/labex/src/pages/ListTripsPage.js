// Para vermos todas as viagens

import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoute from "../Coodinator/Coodinator";
import axios from 'axios'

export function ListTripsPage() {

  const navigate = useNavigate()

  const [myTrip, setMyTrip] = useState([])


  const componenteTrip = myTrip.map((item) => {
    return (<div key={item.id}>
      <p>Nome: {item.name} </p> 
      <p>Descrição:{item.description}</p> 
      <p>Planeta: {item.planet} </p>
      <p>Duração:{item.durationInDays} </p>
      <p>Data: {item.date} </p> 
      <hr/>   
    </div>)
  })

  useEffect(() => {
    getTrips()
  }, [])

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-borges-lamarr/trips"

  const getTrips = () => {
    axios.get(url).then((response) => {
      setMyTrip(response.data.trips)
    }).catch((erro) => {
      console.log(erro.response)
    })
  }

  return (
    <div>
      <p>Lista de viagens</p>
      <button onClick={()=>{MyRoute.goToApplicationForm(navigate)}}>Inscrever-se</button>
      <div>
      {componenteTrip}
      </div>
    </div>
  );
}




