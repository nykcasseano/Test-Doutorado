import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

<head>
  <link rel="stylesheet" href="/src/app.css"/>
</head>




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

export function VF_Quest_1() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(questions.length).fill('null'));
  const currentPage = 2; // Página atual
  const totalPages = 9; // Total de páginas

  const handleAction = () => {
    sessionStorage.setItem('formQuest1Fem', JSON.stringify(answers));
    navigate('/pages/Valores-Fem/Quest_2')
    console.log('Button clicked!');
  }

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
    // console.log(newAnswers);
  };

  const handleGoBack = () => {
    navigate('/pages/Home')
  }



  return (
    <div className="hug">
      <div className="container" >
        <div className="Quest">
          <div className="inputs-container"></div>
          <div>
            <div className="hquatro">
            <h4 className="titulo">A seguir descrevemos diferentes mulheres. Por favor, leia atentamente cada item e indique o quanto a pessoa descrita é diferente ou parecida com você. Quanto esta mulher se parece com você?</h4>
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
                          // checked={answers[questionIndex] === optionIndex || false}
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
            

