import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Card from './Component/Card';
import About from './Component/About';
import Footer from './Component/Footer';
import AdminBookingsTable from './AdminBookingsTable';
import AdminPage from './AdminPage';


function Homepage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <About />
      <Footer />
    </div>
  );
}

export default Homepage;