import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    width: 124%;
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
    background-color: aqua;
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

    const addPessoa = (e) => {
        e.preventDefault();

        const novaMensagem = [inputUsuario+': ' +inputMensagem]
        const novaMensagemDigitada = [...Mensagem, novaMensagem]
        setMensagem(novaMensagemDigitada)
    }

    const msg = Mensagem.map((a) => {
    
        return (
            <p>{a.Mensagem}</p>
        )
      })

      console.log(msg)

    return(
        <div>
            <Section>
            <P>
                {msg}
            </P>
            <Form>
                <label></label>
                <input  
                    placeholder="Remetente:"
                    value={inputUsuario}
                    onChange={handleInputUsuario}
                />

                <label></label>
                <Imput
                    placeholder="Mensagem:"
                    value={inputMensagem}
                    onChange={handleInputMensagem}
                />

                <button onClick={addPessoa}>
                    Clique aqui
                </button>                
            </Form>
            </Section>
        </div>
    )
}