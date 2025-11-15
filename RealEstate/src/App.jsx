import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Buy from './Pages/Buy.jsx';
import Rent from './Pages/Rent.jsx';
import Sell from './Pages/Sell.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import SignUp from './Pages/SignUp.jsx';
import Login from './Pages/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const AppLayout = () => {
  const location = useLocation();

  // hide navbar/footer on these routes
  const hideLayout = ['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
