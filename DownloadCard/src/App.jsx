import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
// import MainContent from "./Components/MainContent/MainContent.jsx";
import IOSApp from "./Components/Header/Tabs/IOSApp";
import OurWebsite from "./Components/Header/Tabs/OurWebsite";
import AboutUs from "./Components/Header/Tabs/AboutUs";
import Contact from "./Components/Header/Tabs/Contact";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/MainContent" element={<MainContent />} />
          <Route path="/IOSApp" element={<IOSApp />} />
          <Route path="/OurWebsite" element={<OurWebsite />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
