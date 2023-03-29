import React, { useState } from "react";

const questions = [
  "É importante para ela desenvolver suas próprias opiniões:",
  "É importante para ela descobrir as coisas por si mesma:",
  "É importante para ela tomar suas próprias decisões a respeito da sua vida:",
  "É importante para ela ser livre para escolher por ela mesma o que fazer:",
  "É importante para ela assumir riscos que fazem a vida ficar excitante?",
  "É importante para ela ter todos os tipos de experiências novas?",
  "É importante para ela se entreter.",
  "É importante para ela desfrutar dos prazeres da vida.",
  "É importante para ela ter muito sucesso.",
  "É importante para ela que as pessoas reconheçam o que ela alcança.",
  "É importante para ela ter o poder que o dinheiro pode trazer.",
  "É importante para ela ser rica."
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