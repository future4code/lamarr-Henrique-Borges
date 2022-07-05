import React from "react";
import styled from "styled-components";
import { Formulario } from "../Formulario/Formulario";

const Main = styled.div`
    display: flex;
    background-color: orange;
    justify-content: center;

`
export function Conteudo() {
    return(
        <div>
            <Main>
                <Formulario/>
            </Main>
        </div>
    )

}
