import React from "react";
import {Header, Formulario} from "./styleEtapa3";

export function Etapa3() {
    return (
        <div>
            <Header>
                <h1> ETAPA 03 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            </Header>
            <Formulario>
                <label>Por que você não terminou um curso de graduação?</label>
                <input type="text"/>
                <label>Voce fez algum curso complementar?</label>
                <select>
                    <option>Curso técnico</option>
                    <option>Cursos de inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
            </Formulario>
        </div>
    )

}
