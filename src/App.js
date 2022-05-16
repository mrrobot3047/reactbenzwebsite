import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import Home from './Components/Home/Home';
import Collection from './Components/Collection/Collection';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
