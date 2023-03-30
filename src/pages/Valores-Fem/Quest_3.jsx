import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  'É importante para ela nunca irritar alguém.' ,
  'É importante para ela ser humilde.' ,
  'É importante para ela estar satisfeita com o que ela tem e não querer mais.' ,
  'É importante para ela que as pessoas que ela conhece tenham total confiança nela.' ,
  'É importante para ela que todos os seus amigos e família possam acreditar nela completamente.' ,
  'É importante para ela cuidar das pessoas das quais ela se sente próxima.' ,
  'É importante para ela se preocupar com todas as necessidades das suas pessoas queridas.' ,
  'É importante para ela que todas as pessoas no mundo tenham oportunidades iguais na vida.' ,
  'É importante para ela que todos sejam tratados com justiça, mesmo pessoas que ela não conhece.' ,
  'É importante para ela tomar parte nas atividades que defendam a natureza.' ,
  'É importante para ela proteger o ambiente natural da destruição ou poluição.' ,
  'É importante para ela ouvir e compreender as pessoas que são diferentes dela.' ,
  'É importante para ela aceitar as pessoas como elas são, mesmo quando ela discorda delas.' ,
];

const options = [
  "Não se parece nada comigo",
  "Se parece pouco comigo",
  "Se parece mais ou menos comigo",
  "Se parece comigo",
  "Se parece muito comigo"
];

export function VF_Quest_3() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

const handleAction = () => {
  navigate('/pages/Satisfacao/SatisfacaoQ')
  console.log('Button clicked!');
};

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
      <button onClick={handleAction}>Próximo</button>
    </div>
  );
}
