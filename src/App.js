import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Accomodation from './Accomodation';
import Parks from './Parks';
import WhereToGo from './WhereToGo';
import AboutUs from './AboutUs';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/accomodation' element={<Accomodation />} />
        <Route path='/parks' element={<Parks />} />
        <Route path='/to-go' element={<WhereToGo />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
