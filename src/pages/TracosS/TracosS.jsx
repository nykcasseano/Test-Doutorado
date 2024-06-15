import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../database/firebaseConfig';
import axios from 'axios';



const questions = [
      "Costumo manipular os outros para conseguir o que quero.",
      "Costumo usar enganações ou mentiras para conseguir o que quero.",
      "Costumo bajular as pessoas para conseguir o que quero.",
      "Costumo explorar outras pessoas para meu próprio benefício.",
      "Eu tendo a ter falta de remorso.",
      "Costumo não me preocupar com a moralidade de minhas ações.",
      "Eu tendo a ser insensível ou indiferente.",
      "Eu costumo ser cínico.",
      "Eu tendo a querer que os outros me admirem.",
      "Eu tendo a querer que os outros prestem atenção em mim.",
      "Eu tendo a buscar prestígio ou status.",
      "Costumo esperar favores especiais dos outros."
      ];
      
const options = [
      "Discordo Totalmente",
      "Discordo",
      "Discordo ligeiramente",
      "Nem concordo nem discordo",
      "Concordo ligeiramente",
      "Concordo",
      "Concordo Totalmente"
];




export function TracosS () {
  const navigate = useNavigate();
  const [tracos, setTracos] = useState(new Array(questions.length).fill('null'));
  sessionStorage.setItem('tracos', JSON.stringify(tracos));

  const handleSubmit = async () => {
    const formDemografico = JSON.parse(window.sessionStorage.getItem('formDemografico'));
    const formQuest1Fem =JSON.parse(window.sessionStorage.getItem('formQuest1Fem'));
    const formQuest1Mas =JSON.parse(window.sessionStorage.getItem('formQuest1Mas'));
    const formQuest2Fem = JSON.parse(window.sessionStorage.getItem('formQuest2Fem'));
    const formQuest2Mas =JSON.parse(window.sessionStorage.getItem('formQuest2Mas'));
    const formQuest3Fem = JSON.parse(window.sessionStorage.getItem('formQuest3Fem'));
    const formQuest3Mas =JSON.parse(window.sessionStorage.getItem('formQuest3Mas'));
    const formSatisfacao = JSON.parse(window.sessionStorage.getItem('formSatisfacao'));
    const formSignificado = JSON.parse(window.sessionStorage.getItem('formSignificado'));
    const tracos = JSON.parse(window.sessionStorage.getItem('tracos'));
  
    try {
      // await addDoc(collection(db, 'form'), {
      //   formDemografico,
      //   formQuest1Fem,
      //   formQuest2Fem,
      //   formQuest3Fem,
      //   formQuest1Mas,
      //   formQuest2Mas,
      //   formQuest3Mas,
      //   formSatisfacao,
      //   formSignificado,
      //   tracos,
      //   timestamp: serverTimestamp(),
      // });

      const apiUrl = 'https://api.pesquisasaude.com.br/update-google-sheet'; 
    const postData = {
      formDemografico,
      formQuest1Fem,
      formQuest2Fem,
      formQuest3Fem,
      formQuest1Mas,
      formQuest2Mas,
      formQuest3Mas,
      formSatisfacao,
      formSignificado,
      tracos,
      timestamp: serverTimestamp(),
    };

    const response = await axios.post(apiUrl, postData);
    console.log('API response:', response.data);

      
         

    } catch (error) {
      console.error('Error submitting form: ', error);
    }


  };
  const handleAction = () => {
      handleSession();
      handleSubmit();
      window.sessionStorage.clear();
        navigate('/pages/agradecimento')
    };

    const handleSession = () => {
    const allItems = Object.entries(sessionStorage);
    const dataToSave = {};

          for (const [key, value] of Object.entries(sessionStorage)) {
            dataToSave[key] = value;
              };
              console.log("DATA SAVE",dataToSave);
              
          };


    const handleOptionSelect = (questionIndex, optionIndex) => {
    const newTracos = [...tracos];
    newTracos[questionIndex] = optionIndex;
          setTracos(newTracos);
          console.log("ANSWERS Visão:",tracos);
        };

        const handleGoBack = () => {
          navigate('/pages/Significado/SignificadoQ')
        }

return (
  <div className="hug">
  <div className="container">
    <div className="Quest">
      <div className="inputs-container"></div>
    <div>
      <div className="hquatro">
      <h4 className="titulo">Por favor, avalie o quanto você Discorda ou Concorda com as assertivas a seguir:</h4>
      </div>
      <table className="mesa"
> 
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
                <td className="bolinhas"  key={optionIndex}>
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={optionIndex}
                    // checked={tracos[questionIndex] === optionIndex}
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
    <div class="page-number">
      Página 7 de 7
    </div>
    </div>
    </div>
    </div>
  );
}