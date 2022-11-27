import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Carouselv2 from "./components/Carouselv2";

import Carousel from "./components/Carousel";
function App() {
  return (
    <div id="fluid">
      <Container fluid>
        <Navbar />
        <div className="m-3">
          <h2>Award Winning Franchises</h2>
          <Carousel />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
