import { Button } from "react-bootstrap";
import { IoPlay } from "react-icons/io5";
import { BiInfoCircle } from "react-icons/bi";
const Homepage = () => {
  return (
    <>
      <div
        id="homepage"
        className=" d-flex align-items-start justify-content-start "
      >
        <div className="p-4">
          <div className="d-flex justify-content-center">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Stranger-Things-logo.png"
              id="homepage-movie-logo"
            />
          </div>

          <p id="homepage-description">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces and one strange
            little girl. Watch all you want. This nostalgic nod to '80s sci-fi
            and horror classics has earned dozens of Emmy nominations, including
            three for Outstanding Drama.
          </p>
          <div className="d-flex">
            <Button className="btn btn-light d-flex align-items-center me-2">
              <IoPlay size={25} className="me-2 one-size-button" />
              Play
            </Button>
            <Button className="btn btn-secondary  d-flex align-items-center mx-2 me-2 opacity-75">
              <BiInfoCircle size={25} className="me-2 one-size-button" />
              More info
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
