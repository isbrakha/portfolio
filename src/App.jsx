
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {

  return (
    <div className="App">
      <video autoPlay loop muted id="videoBackground">
        <source src="/bgg.mp4" type="video/mp4"/>
          This is supposed to be a video.
      </video>

      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

