import Home from "./Pages/Home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventTemp from "./components/EventsTemp/EventTemp";

import Sponsors from "./components/Sponsors/Sponsors";

import DetailEvent from "./components/EventDetailtemp/DetailEvent";
import Workshop from "./components/Workshop/Workshop";

function App() {
  return (
        <Router>
        {/* <Navbar/> */}
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sponsors" element={<Sponsors />} />
            {/* <Route path="/online" element={<Online />} />
            <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/events" element={<EventSelect />} /> */}
            <Route path="/events/:eventName" element={<EventTemp />} />
            {/* <Route path="/nontech" element={<Nontech />} /> */}
            {/* <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="/eventdetail" element={<DetailEvent />} /> */}
            <Route path="/workshop" element={<Workshop />} />
          
          <Route path= "/detail/:eventtype/:name" element={<DetailEvent/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
