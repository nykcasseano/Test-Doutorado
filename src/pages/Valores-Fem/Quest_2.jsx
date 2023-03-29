import React, { useState } from "react";

const Perguntas = [
  "É importante para ela ter poder para conseguir com que as pessoas façam o que ela quer.",
  "É importante para ela ser a pessoa que diz aos outros o que fazer",
  "É importante para ela que ninguém jamais a envergonhe.",
  "É importante para ele proteger sua imagem pública.",
  "É importante para ela evitar qualquer coisa perigosa.",
  "É importante para ela estar segura pessoalmente.",
  "É importante para ela que seu país se proteja de todas as ameaças.",
  "É importante para ela ter um Estado forte que possa defender seus cidadãos.",
  "É importante para ele seguir os costumes da sua família ou os costumes de uma religião",
  "É importante para ela honrar as práticas tradicionais da sua cultura",
  "É importante para ela nunca violar as regras ou regulamentos",
  "É importante para ela obedecer todas as Leis.",
  "É importante para ela evitar chatear as pessoas."
];

const Respostas = [
  "Não se parece nada comigo",
  "Se parece pouco comigo",
  "Se parece mais ou menos comigo",
  "Se parece comigo",
  "Se parece muito comigo"
];

function App() {
  const [respostas, setRespostas] = useState(Array(Perguntas.length).fill(null));

  function handleResposta(perguntaIndex, respostaIndex) {
    const novasRespostas = [...respostas];
    novasRespostas[perguntaIndex] = respostaIndex;
    setRespostas(novasRespostas);
  }

  return (
    <div>
      <h1>Questionário de Personalidade</h1>
      {Perguntas.map((pergunta, perguntaIndex) => (
        <div key={perguntaIndex}>
          <h3>{pergunta}</h3>
          <div>
            {Respostas.map((resposta, respostaIndex) => (
              <button
                key={respostaIndex}
                onClick={() => handleResposta(perguntaIndex, respostaIndex)}
                className={respostas[perguntaIndex] === respostaIndex ? "selected" : ""}
              >
                {resposta}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button onClick={() => console.log(respostas)}>Enviar Respostas</button>
    </div>
  );
}

export default App;
