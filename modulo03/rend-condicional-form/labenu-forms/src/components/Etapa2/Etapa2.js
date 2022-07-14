import React from "react";
import {Header, Formulario} from "./styleEtapa2";

export function Etapa2() {
    return (
        <div>
            <Header>
                <h1>ETAPA 02 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            </Header>
            <Formulario>
                <label>Qual curso?</label>
                <input type="text" />
                <label>Qual a unidade de ensino?</label>
                <input type="text" />
            </Formulario>
        </div>
    )

}
