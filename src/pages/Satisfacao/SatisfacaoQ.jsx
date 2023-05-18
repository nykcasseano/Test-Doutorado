import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  "Na maioria dos aspectos, minha vida é próxima ao meu ideal",
  "As condições da minha vida são excelentes",
  "Estou satisfeito(a) com minha vida",
  "Até hoje, tenho conseguido as coisas importantes que quero na vida",
  "Se pudesse viver uma segunda vez, não mudaria quase nada"
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

export function SatisfacaoQ() {
 
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

const handleAction = () => {
  sessionStorage.setItem('formSatisfacao', JSON.stringify(answers));
  navigate('/pages/Significado/SignificadoQ')
  console.log('Button clicked!');
}

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleGoBack = () => {
    navigate('/pages/Home')
  }

  return (
    <div class="container">
    <div class="Quest">
      <div class="inputs-container"></div>
    <div>
      <h4>Abaixo você encontrará cinco afirmações com as quais pode ou não concordar. Indique o quanto concorda ou discorda com cada uma delas.</h4>
      <table>
        <thead>
          <tr>
            <th>Pergunta</th>
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
                <td key={optionIndex}>
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={optionIndex}
                    checked={answers[questionIndex] === optionIndex}
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
    </div>
    </div>

  );
}




