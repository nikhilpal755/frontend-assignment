import 'react-chatbot-kit/build/main.css'
import './App.css';
import Home from './Pages/Home'
import Chatbot from './Pages/Chatbot';
import NotFound from './Pages/NotFound';
import Exit from './Pages/Exit';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/chatbot' element={<Chatbot/>} />
        <Route path='/exit' element={<Exit/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    
    </div>
  );
}

export default App;
