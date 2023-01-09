import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

import Homepage from "./components/Homepage";
function App() {
  return (
    <div id="body" className="bg-dark text-light">
      <Navbar id="navbar" />
      <Homepage />
      <div className="m-4">
        <Carousel />
      </div>

      <Footer id="footer" />
    </div>
  );
}

export default App;
