import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    width: 132%;

    label {
        //screen reader only
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }
`
const Imput = styled.input`
    width: 50%;
    padding: 5px;
    margin-left: 1px;
    margin-right: 1px;
`
const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end ;
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 1%;
    border: 1px solid black;
    height: 100vh;
`
const P = styled.p`
    padding-left: 2%;
    padding-right: 1%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export function Formulario() {
    
    // estados:
    const [inputUsuario, setInputUsuario] = useState("")
    const [inputMensagem, setInputMensagem] = useState("")
    const [Mensagem, setMensagem] = useState([])
    
    // eventos
    const handleInputUsuario = (e) => {
        setInputUsuario(e.target.value)
    }
    const handleInputMensagem = (e) => {
        setInputMensagem(e.target.value)
    }

    const addMensagem = (e) => {
        e.preventDefault()
        const novaMensagem = inputUsuario +': ' +inputMensagem
        const novaMensagemDigitada = [...Mensagem, novaMensagem]
        setMensagem(novaMensagemDigitada)
    }

    const msg = Mensagem.map((m, index) => {
        m = Mensagem[index]

        return (
          <div key={index}>
            <p>{m}</p> 
          </div>
        )
    })

    return(
        <div>
            <Section>
                <P>
                    {msg}
                </P>
                <Form>
                    <label>Remetente</label>
                    <input  
                        placeholder="Remetente:"
                        value={inputUsuario}
                        onChange={handleInputUsuario}
                    />

                    <label>Mensagem</label>
                    <Imput
                        placeholder="Mensagem:"
                        value={inputMensagem}
                        onChange={handleInputMensagem}
                    />

                    <button onClick={addMensagem}>
                        Enviar
                    </button>                
                </Form>
            </Section>
        </div>
    )
}