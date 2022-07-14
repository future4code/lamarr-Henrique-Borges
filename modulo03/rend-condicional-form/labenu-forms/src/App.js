import React, {useState} from "react";
import { Etapa1 } from "./components/Etapa1/Etapa1";
import { Etapa2 } from "./components/Etapa2/Etapa2";
import { Etapa3 } from "./components/Etapa3/Etapa3";
import { Final } from "./components/Final/Final";
import { Botao } from "./style";

function App() {
  const [etapa, setEtapa] = useState(1);

  const irParaProximaEtapa = () => {
    setEtapa(etapa+1)
  }

  const renderizaEtapa = () => {
    switch (etapa) {
      case 1 :
        return (<Etapa1/>)
      break;
      case 2 :
        return (<Etapa2/>)
      break;
      case 3 :
        return (<Etapa3/>)
      break;
      case 4 :
        return (<Final/>)
      break;
      default:
        return (<Final/>)
      break;
    }
  }

  return (
    <div>
      {renderizaEtapa()}
      <Botao onClick={irParaProximaEtapa}>Próxima etapa</Botao>
    </div>
  );
}

export default App;
