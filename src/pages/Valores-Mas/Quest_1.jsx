
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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


export function VM_Quest_1() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

const handleAction = () => {
  sessionStorage.setItem('formQuest1Mas', JSON.stringify(answers));
  navigate('/pages/Valores-Mas/Quest_2')
  console.log('Button clicked!');

}

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  return (
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
  );
}

