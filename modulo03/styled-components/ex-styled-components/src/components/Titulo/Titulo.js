import React from "react";
import LogoLabenu from "../../img/logolabenu.jpg";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: center;

    img{
        width: 80px;
    }
`
export function Titulo() {
    return(
        <div>
            <Header>
                <img src= {LogoLabenu} alt="Logo Labenu"/>
                <h1>
                    LabZap
                </h1>  
            </Header>
        </div>
    )

}