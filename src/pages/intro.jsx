import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export function Intro() {
  const navigate = useNavigate();


const handleAction = () => {
  navigate('/pages/Home')

}
  return (
    <>
            <div>
            <h1> PESQUISA COM PROFISSIONAIS DA SAÚDE  </h1>
            </div>
            
            <div>
            <p> Este questionário faz parte de um projeto que busca retratar a qualidade do profissional da saúde no Brasil.</p>

            <p>Sua participação é muito importante para o sucesso deste projeto. Nenhuma informação pessoal que possa identificá-lo será gravada.</p>

            <p>Muito obrigado! Para participar basta clicar no link abaixo. </p>
            </div>
            
            <div>
                <button onClick={handleAction}>Começar</button>
            </div>
            </>
        
);


};