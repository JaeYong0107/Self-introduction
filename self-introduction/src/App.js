import './App.css';
import Menubar from './Pages/MainPage/MenuBar';
import Main from './Pages/MainPage/Main';
import Skill from './Pages/MainPage/Skill';
import Portfolio from './Pages/MainPage/Portfolio';
import Contact from './Pages/MainPage/Contact';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Main />
      <Skill />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
