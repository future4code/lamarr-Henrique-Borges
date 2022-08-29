import styled from "styled-components"

export const Titulo = styled.h1`        
    color : gray;
    display: flex;
    justify-content: center
`

export const BotaoClicar = styled.button`
    color : white;
    background-color: gray;
    border-radius: 20px;
    border: none;
    padding: 10px;
    margin-right: 1%;
    width: 100px;
    :hover{
        background-color: wheat  }
`
export const Centralizar = styled.div`
    display: flex;
    justify-content: center
    
`
export const ComponentListTrip = styled.div`
   display: flex;
   flex-direction: column;
   background-color: white;
   font-family: Arial;
   padding: 1%;  
   margin-top: 2%;
   border: 1px solid gray;
   border-top: 4px solid gray;
`
export const Imput = styled.input`
   display: flex;
   flex-direction: column;
   width:35vw;
   height:5vh;
   margin-bottom: 5%;
   border-radius: 10px;
   border: 2px solid gray;
`
export const Select = styled.select`
   display: flex;
   flex-direction: column;
   width:35vw;
   height:6vh;
   margin-bottom: 5%;
   border-radius: 10px;
   background-color: white;
   border: 2px solid gray;
`
export const ComponentListAdmin = styled.div`
   display: flex;
   background-color: white; 
   margin-top: 2%;
   border: 1px solid gray;
   border-radius: 10px;

`
export const BotaoAdmin = styled.button`
    color : black;
    background-color: white;
    border: none;
    padding: 1%;
    width: 100%;
    border-radius: 10px;
    
    :hover{
        background-color: wheat  };
    
`
export const BotaoEcluir = styled.button`
    color : black;
    border: none;
    width: 5%;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
    :hover{
        background-color: red  
    };
    
`
