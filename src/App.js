import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Games from './pages/Games';
import Team from "./pages/Team";
import Govern from "./pages/Govern";
import Docs from "./pages/Docs";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/games" element={<Games/>}/>
        <Route path="/govern" element={<Govern/>}/>
        <Route path="/docs" element={<Docs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
