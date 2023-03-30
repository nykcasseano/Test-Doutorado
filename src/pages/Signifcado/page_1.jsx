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

export function Significado_page_1() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

const handleAction = () => {
  navigate('/pages/Valores-Fem/Quest_3')
  console.log('Button clicked!');

}

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  return (
    <div>
      <h2>Questionário</h2>
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
      <button onClick={handleAction}>Próximo</button>
    </div>
  );
}
