import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const questions = [
  "Eu sinto que minha vida tem sentido",
  "As coisas que faço na vida são significativas.",
  "Eu tenho um propósito na minha vida",
  "Sinto que com o meu trabalho, estou dando uma contribuição significativa para a sociedade",
  "Eu sei muito bem quais são as prioridades na minha vida",
  "Quando penso positivamente sobre meu futuro, coisas boas acontecem",
  "Normalmente penso com otimismo sobre as coisas que acontecem, mesmo que sejam situações muito desafiadoras",
  "Eu tendo a encontrar o lado bom de situações que parecem desoladoras."
];

const options = [
  "Discordo Totalmente",
  "Discordo",
  "Discordo ligeiramente",
  "Nem concordo nem discordo",
  "Concordo ligeiramente",
  "Concordo",
  "Concordo Totalmente"
];

export function SignificadoQ() {

  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(questions.length).fill('null'));

const handleAction = () => {
  sessionStorage.setItem('formSignificado', JSON.stringify(answers));
  navigate('/pages/TracosS/TracosS')
  console.log('Button clicked!');

}

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleGoBack = () => {
    navigate('/pages/Satisfacao/SatisfacaoQ')
  }

 

  return (
    <div className="hug"> 
    <div className="container">
    <div className="Quest">
      <div className="inputs-container"></div>
    <div>
      <div className="hquatro">
      <h4 className="titulo">Agora, pensando na sua vida em termos gerais, por favor responda às questões abaixo. Provavelmente, algumas dessas afirmações não irão descrever bem como você avalia a sua vida, enquanto que outras irão descrever melhor o seu sentimento.</h4>
      </div>
      <table className="mesa">
        <thead>
          <tr>
            <th>Perguntas</th>
            {options.map((option, index) => (
              <th key={index}>{option}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {questions.map((question, questionIndex) => (
            <tr key={questionIndex}>
              <td>{question}</td>
              {options.map((option, optionIndex) => (
                <td className="bolinhas" key={optionIndex}>
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={optionIndex}
                    // checked={answers[questionIndex] === optionIndex}
                    onChange={() =>
                      handleOptionSelect(questionIndex, optionIndex)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleGoBack}> Voltar </button>
      <button onClick={handleAction}>Próximo</button>
    </div>
    <div class="page-number">
      Página 6 de 7
    </div>
    </div>
    </div>
    </div>

  );
}
