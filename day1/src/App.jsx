// App.jsx
import React from 'react';

import Navbar from './components/navbar/Navbar';
import "./styles/sidebar.css";
import './styles/Navbar.css';
import Section from './components/section/Section';
import Content from './components/home/content';
// import App1 from './App1';
import Courseavail from './components/coursecrud/courseavail';
import RegisterForm from './components/login/signup';
import Sidebar from './components/sidebar/sidebar';
import Login from './components/login/login';
// import PersonalProfile from './components/profile/Profile';
import App3 from './App3';
// import Leaderboard from './components/leaderboard/leaderboard';
import GalleryHeader from './text/text';
import Dashboard from './components/admindashboard/dashboard';
import HomepageText from './homepagetext/text3';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AboutUs,
  OurAim,
  OurVision,
} from "./components/sidebar/Aboutus";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./components/sidebar/Services";
import {
  Events,
  EventsOne,
  EventsTwo,
} from "./components/sidebar/Events";

import Contact from "./components/sidebar/Contact";
import Support from "./components/sidebar/Support";
// import GalleryHeader from './text/text';

export default function App() {
  console.log('Rendering App component');
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/login" element={<><RegisterForm /></>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/nav" element={<><br /><br /><br /><Sidebar /><HomepageText/><Content /><App3/><br>
          </br></>} />
          <Route path="/about-us" element={<><br></br><br></br><br></br><Dashboard /></>} />
          <Route path="/about-us/aim" element={<OurAim />} />
          <Route path="/about-us/vision" element={<OurVision />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/services1" element={<ServicesOne />} />
          <Route path="/services/services2" element={<ServicesTwo />} />
          <Route path="/services/services3" element={<ServicesThree />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Courseavail />} />
          <Route path="/events/events1" element={<EventsOne />} />
          <Route path="/events/events2" element={<><br></br><br></br>
          </>} />
          {/* <Route path="/support" element={<PersonalProfile />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
