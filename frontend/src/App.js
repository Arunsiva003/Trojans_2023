import Home from "./Pages/Home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventTemp from "./components/EventsTemp/EventTemp";
function App() {
  return (
        <Router>
        {/* <Navbar/> */}
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/sponsors" element={<Sponsors />} /> */}
            {/* <Route path="/online" element={<Online />} />
            <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/events" element={<EventSelect />} /> */}
            <Route path="/events" element={<EventTemp />} />
            {/* <Route path="/nontech" element={<Nontech />} /> */}
            {/* <Route path="/contact" element={<ContactUs />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path= "/workdetail" element={<WorkDetail/>} />
            <Route path="/eventdetail" element={<DetailEvent />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/nav" element={<Navbar />} /> */}
          </Routes>
        </div>
    </Router>
  );
}

export default App;
