import Navbar from "./Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes} from "react-router-dom";
import { Component } from "react";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
