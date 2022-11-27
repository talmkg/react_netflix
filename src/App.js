import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import Carousel from "./components/Carousel";
function App() {
  return (
    <div id="fluid">
      <Navbar />
      <Container fluid>
        <div>
          <h3>Trending Now</h3>
          <Carousel />
          <h3>Watch It Again</h3>
          <Carousel />
          <h3>New Releases</h3>
          <Carousel />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
