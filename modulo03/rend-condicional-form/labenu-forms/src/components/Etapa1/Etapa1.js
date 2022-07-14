import React from "react";
import {Header, Formulario} from "./styleEtapa1";

export function Etapa1() {
    return (
        <div>
            <Header>
                <h1>ETAPA 01 - DADOS GERAIS</h1>
            </Header>
            <Formulario>
                <label>1. Qual seu nome?</label>
                <input type="text" />
                <label>2. Qual sua idade?</label>
                <input type="number" />
                <label>3. Qual seu email?</label>
                <input type="email" />
                <label>4. Qual sua escolaridade?</label>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
            </Formulario>
        </div>
    )
}
