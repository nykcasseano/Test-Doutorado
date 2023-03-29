import React, { useState } from 'react';

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
      <th> Perguntas </th>
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
