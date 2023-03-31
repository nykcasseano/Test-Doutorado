import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const questions = [
      "Costumo manipular os outros para conseguir o que quero.",
      "Costumo usar enganações ou mentiras para conseguir o que quero.",
      "Costumo bajular as pessoas para conseguir o que quero.",
      "Costumo explorar outras pessoas para meu próprio benefício.",
      "Eu tendo a ter falta de remorso.",
      "Costumo não me preocupar com a moralidade de minhas ações.",
      "Eu tendo a ser insensível ou indiferente.",
      "Eu costumo ser cínico.",
      "Eu tendo a querer que os outros me admirem.",
      "Eu tendo a querer que os outros prestem atenção em mim.",
      "Eu tendo a buscar prestígio ou status.",
      "Costumo esperar favores especiais dos outros."
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

export function TracosS () {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

const handleAction = () => {
// navigate('/pages/TracosS/TracosS')
console.log('Button clicked!');

}

const handleOptionSelect = (questionIndex, optionIndex) => {
const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
};

  return (
    <div>
      <h4>Por favor, avalie o quanto você Discorda ou Concorda com as assertivas a seguir:</h4>
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

