import React from "react";
import styled from "styled-components";

const Inputs = styled.div`
    display: flex;
    background-color: white;
    padding-top: 46%;
    padding-bottom: 3%;

    button{
        margin-right: 30vw;
        margin-left: 1vw;

    }
    label{
        margin-right: 1vw;
        margin-left: 1vw;
    }
    input{
    }
`
export function Formulario() {
    return(
        <div>
            <Inputs>
                <form>
                    <label>Remetente:</label>
                    <input type="text" />
                    <label>Msg:</label>
                    <input type="text" />
                    <button type="submit"> Enviar Mensagem </button>
                </form>
            </Inputs>
        </div>
    )

}