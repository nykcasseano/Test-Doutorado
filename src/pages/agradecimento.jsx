import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'


export function Intro() {
  const navigate = useNavigate();


const handleAction = () => {
  navigate('/pages/Home')

}
  return (
    <>
            <div>
                        <h1> Agradecemos pela disposição em responder essa pesquisa.

            Sua participação foi muito importante para o resultado deste trabalho.

            Obrigado! </h1>
            </div>
            
            <div>
                <button onClick={handleAction}>Próximo</button>
            </div>
            </>
        
);


};