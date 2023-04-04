import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const questions = [
  'É importante para ele nunca irritar alguém.' ,
  'É importante para ele ser humilde.' ,
  'É importante para ele estar satisfeito com o que ele tem e não querer mais.' ,
  'É importante para ele que as pessoas que ele conhece tenham total confiança nele.' ,
  'É importante para ele que todos os seus amigos e família possam acreditar nele completamente.' ,
  'É importante para ele cuidar das pessoas das quais ele se sente próxima.' ,
  'É importante para ele se preocupar com todas as necessidades das suas pessoas queridas.' ,
  'É importante para ele que todas as pessoas no mundo tenham oportunidades iguais na vida.' ,
  'É importante para ele que todos sejam tratados com justiça, mesmo pessoas que ele não conhece.' ,
  'É importante para ele tomar parte nas atividades que defendam a natureza.' ,
  'É importante para ele proteger o ambiente natural da destruição ou poluição.' ,
  'É importante para ele ouvir e compreender as pessoas que são diferentes dele.' ,
  'É importante para ele aceitar as pessoas como elas são, mesmo quando ele discorda delas.' ,
];

const options = [
  "Não se parece nada comigo",
  "Se parece pouco comigo",
  "Se parece mais ou menos comigo",
  "Se parece comigo",
  "Se parece muito comigo"
];

export function VM_Quest_3() {
  
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

const handleAction = () => {
  sessionStorage.setItem('formQuest3Mas', JSON.stringify(answers));
  navigate('/pages/Satisfacao/SatisfacaoQ')
  console.log('Button clicked!');
}

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  return (
    <div class="container">
    <div class="Quest">
      <div class="inputs-container"></div>
    <div>
      <h4>A seguir descrevemos diferentes homens. Por favor, leia atentamente cada item e indique o quanto a pessoa descrita é Diferente ou Parecida com você. Quanto este homem se parece com você?
</h4>
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
    </div>
    </div>
  );
}




