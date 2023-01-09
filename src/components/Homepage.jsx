import { Container } from "react-bootstrap";
const Homepage = () => {
  return (
    <>
      <div
        id="homepage"
        className=" d-flex align-items-start justify-content-start "
      >
        <div className="p-4">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/04/Stranger-Things-logo.png"
            id="homepage-movie-logo"
          />
          <p id="homepage-description">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces and one strange
            little girl. Watch all you want. This nostalgic nod to '80s sci-fi
            and horror classics has earned dozens of Emmy nominations, including
            three for Outstanding Drama.
          </p>
        </div>
      </div>
    </>
  );
};
export default Homepage;
