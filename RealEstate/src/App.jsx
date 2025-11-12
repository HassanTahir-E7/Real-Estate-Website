import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Buy from './Pages/Buy.jsx';
import Rent from './Pages/Rent.jsx';
import Sell from './Pages/Sell.jsx';
// import Contact from './Pages/Contact';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sell" element={<Sell />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;