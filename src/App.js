import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import "./scss/style.scss";
import Homepage from "./components/Homepage";
function App() {
  return (
    <div id="body" className="bg-dark text-light">
      <Navbar id="navbar" />
      <div className="m-4">
        <Homepage />
        <Carousel />
      </div>

      <Footer id="footer" />
    </div>
  );
}

export default App;
