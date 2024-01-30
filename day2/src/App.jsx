// App.jsx
import React from 'react';

import Navbar from './components/navbar/Navbar';
import "./styles/sidebar.css";
import './styles/Navbar.css';
import IHome from './components/coursesadmin/home';
import Leaderboard from './components/leaderboard/leaderboard';
import Profileex from './components/profile/pf';
import Section from './components/section/Section';
import Content from './components/home/content';
import AChart from './components/dash1/linechart';
import Profile1 from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import Courseavail from './components/coursecrud/courseavail';
import RegisterForm from './components/login/signup';
import Sidebar from './components/sidebar/sidebar';
import Login from './components/login/login';
// import PersonalProfile from './components/profile/Profile';
import App3 from './App3';
import Ut from './components/tournaments/ut';
import Ut1 from './components/tournaments/ut1';
// import Profile1 from './components/profile/prof1';// import Leaderboard from './components/leaderboard/leaderboard';
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
          {/* <Route path="/about-us/aim" render={() => <ViewProfile data={profile data} />} /> */}
        {/* <Route path="/edit" render={() => <EditProfile data={profile data} />} /> */}
          <Route path="/about-us" element={<><br></br><br></br><br></br><Dashboard /></>} />
          <Route path="/about-us/aim" element={<Profile1 />} />
          <Route path="/edit" element={<Profileex/>}/>
          <Route path="/about-us/vision" element={<AChart />} />
          <Route path="/academy" element={<IHome/>}/>
          <Route path="/services" element={<><br></br><br></br><br></br><br></br><Profile1 /><AChart/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><Leaderboard/><Ut/><Ut1/></>} />
          <Route path="/services/services1" element={<ServicesOne />} />
          <Route path="/services/services2" element={<ServicesTwo />} />
          <Route path="/services/services3" element={<ServicesThree />} />
          <Route path="/contact" element={<Profileex />} />
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
