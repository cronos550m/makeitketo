import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AboutUs, OurAim, OurVision } from "./components/AboutUs/AboutUs";
// import {
//   Services,
//   ServicesOne,
//   ServicesTwo,
//   ServicesThree,
// } from "./components/Services/Services";
// import { Events, EventsOne, EventsTwo } from "./components/Events/Events";
// import Contact from "./components/ContactUs/ContactUs";
// import Support from "./components/Support/Support";
import Head from './components/Head/Head'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Head />
      <Router>
        <Sidebar />
        {/* <Routes>
          <Route exact path="/about-us" component={<AboutUs />} />
          <Route exact path="/about-us/aim" component={<OurAim />} />
          <Route exact path="/about-us/vision" component={<OurVision />} />
          <Route exact path="/services" component={<Services />} />
          <Route exact path="/services/services1" component={<ServicesOne />} />
          <Route exact path="/services/services2" component={<ServicesTwo />} />
          <Route exact path="/services/services3" component={<ServicesThree />} />
          <Route exact path="/contact" component={<Contact />} />
          <Route exact path="/events" component={<Events />} />
          <Route exact path="/events/events1" component={<EventsOne />} />
          <Route exact path="/events/events2" component={<EventsTwo />} />
          <Route exact path="/support" component={<Support />} />
        </Routes> */}
      </Router>
      <Header />
      <Main />
      <Footer />
      <main></main>
    </div>
  );
}

export default App;
