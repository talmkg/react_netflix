import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div id="body" className="bg-dark text-light">
      <Container fluid>
        <Navbar id="navbar" />
        <div className="m-3">
          <h2>Award Winning Franchises</h2>
          <Carousel />
        </div>
      </Container>
      <Footer id="footer" />
    </div>
  );
}

export default App;
