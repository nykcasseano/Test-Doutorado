import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));
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
  };

  const handleGoBack = () => {
    navigate('/pages/Home')
  }



  return (
    <div clas="hug">
      <div class="container">
        <div class="Quest">
          <div class="inputs-container"></div>
          <div>
            <h4>A seguir descrevemos diferentes mulheres. Por favor, leia atentamente cada item e indique o quanto a pessoa descrita é Diferente ou Parecida com você. Quanto esta mulher se parece com você?</h4>
            <table class="mesa">
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
            <button onClick={handleGoBack}> Voltar </button>
            <button onClick={handleAction}>Próximo</button>
            </div>
            </div>
            <div class="page-number">
            Página 2 de 7
            </div>
            </div>
            </div>

);
}
            

