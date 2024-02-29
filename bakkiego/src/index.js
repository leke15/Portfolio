import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from "./components/home/Home";
import Introduction from "./components/introduction/Introduction";
import Services from "./components/services/Service";
import Download from "./components/downloadApp/DownloadApp";
import Contact from "./components/contact/Contact";
import Business from "./components/business/Business";
import Footer from "./components/footer/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route inde path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/services" element={<Services />} />
        <Route path="/downloadapp" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bkfoot" element={<Footer />} />
        <Route path='/business' element={<Business/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
);


