import React, { useState } from 'react';

const questions = [
  { question: 'É importante para ela nunca irritar alguém.' },
  { question: 'É importante para ela ser humilde.' },
  { question: 'É importante para ela estar satisfeita com o que ela tem e não querer mais.' },
  { question: 'É importante para ela que as pessoas que elaconhece tenham total confiança nela.' },
  { question: 'É importante para ela que todos os seus amigos e família possam acreditar nela completamente.' },
  { question: 'É importante para ela cuidar das pessoas das quais ela se sente próxima.' },
  { question: 'É importante para ela se preocupar com todas as necessidades das suas pessoas queridas.' },
  { question: 'É importante para ela que todas as pessoas no mundo tenham oportunidades iguais na vida.' },
  { question: 'É importante para ela que todos sejam tratados com justiça, mesmo pessoas que ela não conhece.' },
  { question: 'É importante para ela tomar parte nas atividades que defendam a natureza.' },
  { question: 'É importante para ela proteger o ambiente natural da destruição ou poluição.' },
  { question: 'É importante para ela ouvir e compreender as pessoas que são diferentes dela.' },
  { question: 'É importante para ela aceitar as pessoas como elas são, mesmo quando ela discorda delas.' },
];

const options = [
  "Não se parece nada comigo",
  "Se parece pouco comigo",
  "Se parece mais ou menos comigo",
  "Se parece comigo",
  "Se parece muito comigo"
];


export function VF_Quest_3() {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
    console.log(newAnswers)
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
