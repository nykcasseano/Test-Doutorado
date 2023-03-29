import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quest1 } from './pages/Quest1';
import {VF_Quest_1} from './pages/Valores-Fem/Quest_1'
import {VF_Quest_2} from './pages/Valores-Fem/Quest_2'
import {VF_Quest_3} from './pages/Valores-Fem/Quest_3'
import {VM_Quest_1_} from './pages/Valores-Mas/Quest_1'
import {VM_Quest_2_} from './pages/Valores-Mas/Quest_2'
import {VM_Quest_3_} from './pages/Valores-Mas/Quest_3'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questionario1" element={<Quest1 />} />
      </Routes>
    </>
  )
}

export default App
