import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const questions = [
  "É importante para ele ter poder para conseguir com que as pessoas façam o que ele quer.",
  "É importante para ele ser a pessoa que diz aos outros o que fazer",
  "É importante para ele que ninguém jamais o envergonhe.",
  "É importante para ele proteger sua imagem pública.",
  "É importante para ele evitar qualquer coisa perigosa.",
  "É importante para ele estar seguro pessoalmente.",
  "É importante para ele que seu país se proteja de todas as ameaças.",
  "É importante para ele ter um Estado forte que possa defender seus cidadãos.",
  "É importante para ele seguir os costumes da sua família ou os costumes de uma religião",
  "É importante para ele honrar as práticas tradicionais de sua cultura",
  "É importante para ele nunca violar as regras ou regulamentos",
  "É importante para ele obedecer todas as Leis.",
  "É importante para ele evitar chatear as pessoas."
];

const options  = [
  "Não se parece nada comigo",
  "Se parece pouco comigo",
  "Se parece mais ou menos comigo",
  "Se parece comigo",
  "Se parece muito comigo"
];


export function VM_Quest_2() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

const handleAction = () => {
  navigate('/pages/Valores-Mas/Quest_3')
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




