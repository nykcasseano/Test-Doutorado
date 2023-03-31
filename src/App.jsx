import './App.css'
import { Routes, Route } from 'react-router-dom';
import {Intro} from './pages/intro';
import { Home } from './pages/Home';
import {VF_Quest_1} from './pages/Valores-Fem/Quest_1'
import {VF_Quest_2} from './pages/Valores-Fem/Quest_2'
import {VF_Quest_3} from './pages/Valores-Fem/Quest_3'
import {VM_Quest_1} from './pages/Valores-Mas/Quest_1'
import {VM_Quest_2} from './pages/Valores-Mas/Quest_2'
import {VM_Quest_3} from './pages/Valores-Mas/Quest_3'
import {SatisfacaoQ}from './pages/Satisfacao/SatisfacaoQ'
import {SignificadoQ} from './pages/Significado/SignificadoQ'
import {TracosS} from './pages/TracosS/TracosS'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        { <Route path="/pages/Valores-Fem/Quest_1" element={<VF_Quest_1 />} />}
        {   <Route path="/pages/Valores-Fem/Quest_2" element={<VF_Quest_2 />} />} 
        {   <Route path="/pages/Valores-Fem/Quest_3" element={<VF_Quest_3 />} />} 
        { <Route path="/pages/Valores-Mas/Quest_1" element={<VM_Quest_1 />} />}
        { <Route path="/pages/Valores-Mas/Quest_2" element={<VM_Quest_2 />} />}
        { <Route path="/pages/Valores-Mas/Quest_3" element={<VM_Quest_3 />} />}
        {   <Route path="/pages/Satisfacao/SatisfacaoQ" element={<SatisfacaoQ/>} />} 
        {   <Route path="/pages/Significado/SignificadoQ" element={<SignificadoQ/>} />} 
        {   <Route path="/pages/TracosS/TracosS" element={<TracosS/>} />} 
        {   <Route path="/pages/intro" element={<Intro/>} />} 
    
    
        
      </Routes>
    </>
  )
}

export default App
