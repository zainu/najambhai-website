import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Games from './pages/Games';
import './App.scss';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/games" element={<Games/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
