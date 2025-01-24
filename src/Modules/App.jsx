import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import { Home } from "../Routes/Home/Home.jsx";
import { About } from "../Routes/About/About.jsx";
import { Portfolio } from "../Routes/Portfolio/Portfolio.jsx";
import { Contact } from "../Routes/Contact/Contact.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  return (
    <div id="container">
      <Header />
      <Nav />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
