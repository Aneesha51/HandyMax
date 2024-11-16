import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './Componants/Navbar Section/Navbar';
import Home from './Componants/Home Section/Home';
import About from './Componants/About Section/About';
import Service from './Componants/Service Section/Service';
import Process from './Componants/Process Section/Process';
import Review from './Componants/Review Section/Review';
import Contact from './Componants/Contact Section/Contact';
import Footer from './Componants/Footer Section/Footer';


const App = () => {
  return (
    <Router> {/* Wrap your entire app with BrowserRouter */}
      <div>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Process />
        <Review />
        <Contact />
        <Footer/>
      </div>
    </Router>
  );
};

export default App;