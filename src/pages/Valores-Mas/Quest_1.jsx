
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

console.log('hey from men q 1')


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
  const [answers, setAnswers] = useState(new Array(questions.length).fill('null'));
  const currentPage = 2; // Página atual
  const totalPages = 9; // Total de páginas

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

  const handleGoBack = () => {
    navigate('/pages/Home')
  }

  return (
    <div className="hug">
      <div className="container">
        <div className="Quest">
          <div className="inputs-container"></div>
          <div>
            <div className="hquatro">
            <h4 className="titulo">A seguir descrevemos diferentes Homens. Por favor, leia atentamente cada item e indique o quanto a pessoa descrita é diferente ou parecida com você. Quanto este homem  se parece com você?</h4>
            </div>
            <table className="mesa">
              <thead>
                <tr>
                  <th>Perguntas</th>
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
                      <td className="bolinhas" key={optionIndex}>
                        <input
                          type="radio"
                          name={`question-${questionIndex}`}
                          value={optionIndex}
                          // checked={answers[questionIndex] === optionIndex}
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
            <button onClick={handleGoBack}>Voltar</button>
            <button onClick={handleAction}>Próximo</button>
          </div>
        </div>
        <div className="page-number">
          Página 2 de 7
        </div>
      </div>
    </div>
  );
  
}
            


