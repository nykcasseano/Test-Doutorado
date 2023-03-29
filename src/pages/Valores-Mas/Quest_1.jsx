import React, { useState } from "react";

const questions = [
  "É importante para ele desenvolver suas próprias opiniões:",
  "É importante para ele descobrir as coisas por si mesmo:",
  "É importante para ele tomar suas próprias decisões a respeito da sua vida:",
  "É importante para ele ser livre para escolher por ele mesmo o que fazer:",
  "É importante para ele assumir riscos que fazem a vida ficar excitante?",
  "É importante para ele ter todos os tipos de experiências novas?",
  "É importante para ele se entreter.",
  "É importante para ele desfrutar dos prazeres da vida.",
  "É importante para ele ter muito sucesso.",
  "É importante para ele que as pessoas reconheçam o que ele alcança.",
  "É importante para ele ter o poder que o dinheiro pode trazer.",
  "É importante para ele ser rico."
];

const options = [
  "Não se parece nada comigo",
  "Se parece pouco comigo",
  "Se parece mais ou menos comigo",
  "Se parece comigo",
  "Se parece muito comigo"
];

function Questionnaire() {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

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
    </div>
  );
}

export default Questionnaire;