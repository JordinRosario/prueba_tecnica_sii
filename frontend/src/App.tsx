import './App.css'
import { Routes, Route } from "react-router-dom";
import PaidMethod from './components/PaidMethod';

function App() {

  return (
    <Routes>
      <Route path='/static/' element={<PaidMethod/>}/>
    </Routes>
  )
}

export default App
