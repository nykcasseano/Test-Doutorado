import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
// import {VF_Quest_1} from './pages/Valores-Fem/Quest_1'
// import {VF_Quest_2} from './pages/Valores-Fem/Quest_2'
// import {VF_Quest_3} from './pages/Valores-Fem/Quest_3'
// import {VM_Quest_1} from './pages/Valores-Mas/Quest_1'
// import {VM_Quest_2} from './pages/Valores-Mas/Quest_2'
// import {VM_Quest_3} from './pages/Valores-Mas/Quest_3'
// import {Satisfacao_page_1}from './pages/Satisfacao/page_1'
// import {Significado_page_1} from './pages/Significado/page_1'
// import {TracoS_page_1} from './pages/Traco/page_1'


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