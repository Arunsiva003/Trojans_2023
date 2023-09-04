import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/home';
import EventTemp from './components/EventsTemp/EventTemp';
import Sponsors from './components/Sponsors/Sponsors';
import DetailEvent from './components/EventDetailtemp/DetailEvent';
import Workshop from './components/Workshop/Workshop';
import WorkDetail from './components/WorkDetail/WorkDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/events/:eventName" element={<EventTemp />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workdetail" element={<WorkDetail />} />
          <Route path="/detail/:eventtype/:name" element={<DetailEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
