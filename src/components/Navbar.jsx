import { Container, Navbar, Nav } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { VscPlayCircle } from "react-icons/vsc";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosShare } from "react-icons/io";
function BSnavbar() {
  return (
    <>
      <Navbar variant="dark" className="p-4" id="desktop-navbar">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
            height="30"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">TV Shows</Nav.Link>
          <Nav.Link href="#pricing">Movies</Nav.Link>
          <Nav.Link href="#pricing">Recently Added</Nav.Link>
          <Nav.Link href="#pricing">My List</Nav.Link>
        </Nav>
      </Navbar>
      <Navbar
        className="p-3 d-flex justify-content-between text-red "
        id="mobile-navbar"
      >
        <Nav.Link href="#home">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
            height="20"
          />
        </Nav.Link>
        <Nav.Link href="#share">
          <IoIosShare size={30} />
        </Nav.Link>
      </Navbar>
      <Navbar
        className=" p-3 fixed-bottom d-flex justify-content-around "
        id="mobile-navbar"
      >
        <Nav.Link href="#home">
          <AiFillHome size={25} className="text-red" />
        </Nav.Link>
        <Nav.Link href="#features">
          <VscPlayCircle size={25} />
        </Nav.Link>
        <Nav.Link href="#pricing">
          <RiSearchLine size={25} />
        </Nav.Link>
        <Nav.Link href="#pricing">
          <HiOutlineUser size={25} />
        </Nav.Link>
      </Navbar>
    </>
  );
}

export default BSnavbar;
