import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Card from './Component/Card';
import About from './Component/About';
import Footer from './Component/Footer';
import Homepage from './Homepage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
