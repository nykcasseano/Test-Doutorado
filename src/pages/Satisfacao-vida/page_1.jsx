import React, { useState } from 'react';

const perguntas = [
  "Na maioria dos aspectos, minha vida é próxima ao meu ideal",
  "As condições da minha vida são excelentes",
  "Estou satisfeito(a) com minha vida",
  "Até hoje, tenho conseguido as coisas importantes que quero na vida",
  "Se pudesse viver uma segunda vez, não mudaria quase nada"
];

const respostas = [
  "Discordo Totalmente",
  "Discordo",
  "Discordo ligeiramente",
  "Nem concordo nem discordo",
  "Concordo ligeiramente",
  "Concordo",
  "Concordo Totalmente"
];

function App() {
  const [dados, setDados] = useState(Array(perguntas.length).fill(null));

  function handleChange(event, perguntaIndex) {
    const novaResposta = event.target.value;
    setDados(dados => {
      const novosDados = [...dados];
      novosDados[perguntaIndex] = novaResposta;
      return novosDados;
    });
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            {respostas.map((resposta, index) => (
              <th key={index}>{resposta}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {perguntas.map((pergunta, perguntaIndex) => (
            <tr key={perguntaIndex}>
              <td>{pergunta}</td>
              {respostas.map((resposta, respostaIndex) => (
                <td key={respostaIndex}>
                  <input
                    type="radio"
                    name={`pergunta${perguntaIndex}`}
                    value={resposta}
                    checked={dados[perguntaIndex] === resposta}
                    onChange={event => handleChange(event, perguntaIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
