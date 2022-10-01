import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage/LandingPage';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import EventPage from './pages/EventPage/EventPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="createEvent" element={ <CreateEvent/> } />
        <Route path="event" element={ <EventPage/> } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
