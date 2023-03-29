import React, { useState } from 'react';

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

const Questionnaire = () => {
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> </th>
            {options.map((option, index) => (
              <th key={index}>{option}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td>{question}</td>
              {options.map((option, optionIndex) => (
                <td key={optionIndex}>
                  <input
                    type="radio"
                    name={`question${index}`}
                    value={optionIndex}
                    checked={answers[index] === optionIndex}
                    onChange={() => handleAnswer(index, optionIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Questionnaire;
