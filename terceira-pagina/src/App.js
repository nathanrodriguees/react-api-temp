import { useState, useEffect } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  let temperatura = "";
  const [stateTemperatura, setStateTemperatura] = useState("");

  let cidade = "";
  const [stateCidade, setStateCidade] = useState("");

  const [local, setLocal] = useState("São Paulo");

  const callApi = () => {
    console.log("vai chamar a API temperatura");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=pt_br&units=metric&appid=be51a77109866b8c1fb8b1210164f43d`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((dadoTemperatura) => {
        temperatura = dadoTemperatura.main.temp;
        console.log(temperatura);
        setStateTemperatura(dadoTemperatura.main.temp);
        return dadoTemperatura.name;
      })
      .then((dadoCidade) => {
        cidade = dadoCidade;
        console.log(cidade);
        setStateCidade(dadoCidade);
      })
      .catch(() =>{
        alert('Cidade não encontrada');
      });
  }

  const dadoEntrada = (evento) => {
    setLocal(evento.target.value); //consigo pegar a tecla
  };

  return (
    <div className="App">
      <input
        placeholder="Buscar por cidade"
        type="text"
        onChange={dadoEntrada}
      ></input>
      <button onClick={callApi}>Buscar</button>
      <p>{stateCidade}</p>
      <p>{stateTemperatura}</p>
    </div>
  );
}

export default App;

// const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
// let [contadorEstado, setContadorEstado] = useState(0);

{
  // diasSemana.map((dia) => {
  //   return (
  //     <Card temperatura="28º" descricao="Nublado" cidade={dia} />
  //   );
  // })
}
{
  /* <h1>{contadorEstado}</h1>
<button onClick={() => {setContadorEstado(contadorEstado = contadorEstado + 1)}}>Clique aqui</button> */
}
