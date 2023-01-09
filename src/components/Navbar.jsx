import { Container, Navbar, Nav } from "react-bootstrap";
function BSnavbar() {
  return (
    <>
      <Navbar variant="dark" id="black">
        <Container fluid className="d-flex">
          <div className="d-flex align-items-center">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
                max-width="5%"
                height="30"
                className="d-inline-block align-top-left m-2"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">TV Shows</Nav.Link>
              <Nav.Link href="#pricing">Movies</Nav.Link>
              <Nav.Link href="#pricing">Recently Added</Nav.Link>
              <Nav.Link href="#pricing">My List</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default BSnavbar;
