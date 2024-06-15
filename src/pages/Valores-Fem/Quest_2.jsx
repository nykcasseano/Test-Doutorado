import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const questions = [
  "É importante para ela ter poder para conseguir com que as pessoas façam o que ela quer.",
  "É importante para ela ser a pessoa que diz aos outros o que fazer",
  "É importante para ela que ninguém jamais a envergonhe.",
  "É importante para ele proteger sua imagem pública.",
  "É importante para ela evitar qualquer coisa perigosa.",
  "É importante para ela estar segura pessoalmente.",
  "É importante para ela que seu país se proteja de todas as ameaças.",
  "É importante para ela ter um Estado forte que possa defender seus cidadãos.",
  "É importante para ele seguir os costumes da sua família ou os costumes de uma religião",
  "É importante para ela honrar as práticas tradicionais da sua cultura",
  "É importante para ela nunca violar as regras ou regulamentos",
  "É importante para ela obedecer todas as Leis.",
  "É importante para ela evitar chatear as pessoas."
];

const options = [
  "Não se parece nada comigo",
  "Se parece pouco comigo",
  "Se parece mais ou menos comigo",
  "Se parece comigo",
  "Se parece muito comigo"
];

export function VF_Quest_2() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(questions.length).fill('null'));
  const currentPage = 3; // Página atual
  const totalPages = 9; // Total de páginas

  const handleAction = () => {
    sessionStorage.setItem('formQuest2Fem', JSON.stringify(answers));
    navigate('/pages/Valores-Fem/Quest_3')
    console.log('Button clicked!');
  }

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleGoBack = () => {
    navigate(`/pages/Valores-Fem/Quest_1`);
  }

  
  return (
    <div className="hug">
      <div className="container">
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
          Página 3 de 7
        </div>
      </div>
    </div>
  );
  
}
            
