import './App.css';
import Menubar from './Pages/MainPage/MenuBar';
import Main from './Pages/MainPage/Main';
import Skill from './Pages/MainPage/Skill';
import Portfolio from './Pages/MainPage/Portfolio';
import Contact from './Pages/MainPage/Contact';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
