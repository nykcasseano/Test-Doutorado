import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quest1 } from './pages/Quest1';

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
