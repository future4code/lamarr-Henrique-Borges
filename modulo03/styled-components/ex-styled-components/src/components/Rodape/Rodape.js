import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    background-color: gray;
    padding: 5px;

`
export function Rodape() {
    return(
        <div>
            <Footer>
                Copyright. 2022, Todos os direitos reservados, R. Pais Leme, 215, Conjunto 820, Pinheiros.
            </Footer>
        </div>

    )

}