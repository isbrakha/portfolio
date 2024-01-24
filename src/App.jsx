import Header from "./components/Header";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";

import Portfolio from "./pages/Portfolio.jsx"

function App() {

  return (
    <div className="App">
      <video autoPlay loop muted id="videoBackground">
        <source src="/bgg.mp4" type="video/mp4"/>
          This is supposed to be a video.
      </video>

      <Header />
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

