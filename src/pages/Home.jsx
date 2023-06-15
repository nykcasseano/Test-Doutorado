import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../database/firebaseConfig';
<head>
  <link rel="stylesheet" href="/src/app.css"/>
</head>



export function Home() {
  const navigate = useNavigate();
  const [profissao, setProfissao] = useState('');
  const [nivelFormacao, setNivelFormacao] = useState('');
  const [anoConclusao, setAnoConclusao] = useState('');
  const [naoConcluiu, setNaoConcluiu] = useState(false);
  const [sexo, setSexo] = useState('');
  const [states, setStates] = useState(['']);
  const [estadoAtua, setEstadoAtua] = useState('');
  const [municipioAtua,setmunicipioAtua] = useState('');
  const [dataNascimento,setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [especialidade,setEspecialidade] =useState('');
  
  console.log(sexo);

  const estados = {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    DF: 'Distrito Federal',
    ES: 'Espírito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MT: 'Mato Grosso',
    MS: 'Mato Grosso do Sul',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernambuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Rio Grande do Norte',
    RS: 'Rio Grande do Sul',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins'
  };
  

  // useEffect(() => {
  //   const fetchStates = async () => {
  //     const response = await fetch('/api/states');
  //     const data = await response.json();
  //     setStates(data);
  //     console.log(data);
  //   };
  //   fetchStates();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Enviando');
  
    try {
     
      console.log('Form submitted successfully!');
      setProfissao('');
      setNivelFormacao('');
      setAnoConclusao('');
      setNaoConcluiu(false);
      setEstadoAtua('');
      sessionStorage.setItem('formDemografico', JSON.stringify(Demografico));


      if (naoConcluiu) {
          navigate('/pages/agradecimento')
        }
      else if (sexo === 'Masculino') {
        navigate('/pages/Valores-Mas/Quest_1')
        
      } else {
        navigate('/pages/Valores-Fem/Quest_1')
      }
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };

  const handleProfissaoChange = (event) => {
    setProfissao(event.target.value);
    console.log(profissao.target.value);
  };

  const handleNivelFormacaoChange = (event) => {
    setNivelFormacao(event.target.value);
    console.log(event.target.value);
  };

  const handleEstadoAtuaChange = (event) => {
    setEstadoAtua(event.target.value);
    console.log(event.target.value);
  };


  const handleMunicipioAtuaChange = (event) => {
    setmunicipioAtua(event.target.value);
    console.log(event.target.value);
  };

  const handleDataNascimentoChange = (event) => {
    setDataNascimento(event.target.value);
    console.log(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
    console.log(event.target.value);
  };

  const handlEspecialidadeChange = (event) => {
    setEspecialidade(event.target.value);
    console.log(event.target.value);
  };



  
  const handleAnoConclusaoChange = (e) => {
    setAnoConclusao(e.target.value);
    setNaoConcluiu(false);
    console.log(anoConclusao)
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setNaoConcluiu(checked);
    if (!checked) {
      console.log(naoConcluiu);
    }
  };
  
  const Demografico = {
    profissao,
    nivelFormacao,
    anoConclusao,
    naoConcluiu,
    estadoAtua,
    municipioAtua,
    sexo,
    dataNascimento,
    especialidade,
    cpf,

}
console.log('valoresConstDemo:', Demografico);

return (
  <div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="profissao">Profissão:</label>
            <select id="profissao" name="profissao" value={profissao} onChange={handleProfissaoChange} className="form-control">
              <option value="">Selecione uma opção</option>
              <option value="Enfermagem">Enfermagem</option>
              <option value="Farmácia">Farmácia</option>
              <option value="Fisioterapia">Fisioterapia</option>
              <option value="Medicina">Medicina</option>
              <option value="Nutrição">Nutrição</option>
              <option value="Odontologia">Odontologia</option>
              <option value="Psicologia">Psicologia</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="nivelFormacao">Nível de Formação:</label>
            <select id="nivelFormacao" name="nivelFormacao" value={nivelFormacao} onChange={handleNivelFormacaoChange} className="form-control">
              <option value="">Selecione uma opção</option>
              <option value="Superior Completo">Superior Completo</option>
              <option value="Pós-graduação lato senso (ex.: residência)">Pós-graduação lato senso (ex.: residência)</option>
              <option value="Mestrado">Mestrado</option>
              <option value="Doutorado">Doutorado</option>
              <option value="Pós-Doutorado">Pós-Doutorado</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="anoConclusao">Em que ano concluiu seu curso superior:</label>
            <select id="anoConclusao" name="anoConclusao" value={anoConclusao} onChange={handleAnoConclusaoChange} className="form-control">
              <option value="">Selecione</option>
              {Array.from({ length: 39 }, (_, i) => 2022 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="naoConcluiu">Marque se ainda não concluiu o curso:</label>
            <input
              type="checkbox"
              id="naoConcluiu"
              name="naoConcluiu"
              checked={naoConcluiu}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="estadoAtua">Estado:</label>
            <select id="estadoAtua" name="estadoAtua" value={estadoAtua} onChange={handleEstadoAtuaChange} className="form-control">
              <option value="">Selecione uma opção</option>
              {Object.keys(estados).map((sigla) => (
                <option key={sigla} value={sigla}>{sigla} - {estados[sigla]}</option>
              ))}
            </select>
          </div>

        

        <label htmlFor="municipioAtua">Principal município em que atua:</label>
        <input type="text" id="municipioAtua" name="municipioAtua" value={municipioAtua} onChange={handleMunicipioAtuaChange} /> <br /><br />



        <label htmlFor="sexo">Sexo:</label>
        <input type="radio" id="sexoFeminino" name="sexo" value="Feminino" onChange={(e) => setSexo(e.target.value)} />
        <label htmlFor="sexoFeminino">Feminino</label>
        <input type="radio" id="sexoMasculino" name="sexo" value="Masculino" onChange={(e) => setSexo(e.target.value)} />
        <label htmlFor="sexoMasculino">Masculino</label><br /><br />

        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        <input type="date" id="dataNascimento" name="dataNascimento"  value={dataNascimento} onChange={handleDataNascimentoChange} /> <br />

        
        
        {profissao === 'Medicina' && (
            <>
              <label htmlFor="medico">Atua em especialidade cirúrgica?</label><br /><br />

              <label htmlFor="areaEspecialidade">Se sim, qual a área de especialidade?</label>
              <input type="text" id="areaEspecialidade" name="areaEspecialidade" value={especialidade} onChange={handlEspecialidadeChange} /><br /><br />
            </>
          )}
        <label htmlFor="cpf">4 primeiros dígitos do CPF:</label>
        <input type="text" id="cpf" name="cpf" maxLength="4"  value={cpf} onChange={handleCpfChange}/><br /><br />

        {/* <input type="submit" value="Submit" /> */}

        <button type="submit">Próximo</button>
      </form>
    </div>
    <div class="page-number">
      Página 1 de 9
    </div>
    </div>
    </div>
  )
}
