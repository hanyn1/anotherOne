import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Player from './component/Player'
import Equipe from './component/Equipe';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Player' element={<Player/>} /> 
        <Route path='/Equipe' element={<Equipe/>} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
