import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutTED from "./pages/AboutTED";
import AboutTEDxIUL from "./pages/AboutTEDxIUL";
import Organizers from "./pages/Organizers";
import CoOrganizers from "./pages/CoOrganizers";
import TeamLeads from "./pages/TeamLeads";
import TeamMembers from "./pages/TeamMembers";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Tickets from './components/Tickets';
import About from './components/About';
import AboutTed from './components/AboutTed';
import Theme from './components/Theme';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Venue from './components/Venue';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-ted" element={<AboutTED />} />
      <Route path="/about-tedxiul" element={<AboutTEDxIUL />} />
      <Route path="/organizers" element={<Organizers />} />
      <Route path="/co-organizers" element={<CoOrganizers />} />
      <Route path="/team-leads" element={<TeamLeads />} />
      <Route path="/team-members" element={<TeamMembers />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;