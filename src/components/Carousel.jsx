import { Component } from "react";
import { Carousel, Stack } from "react-bootstrap";

class Carousel extends Component {
  state = {
    key: [],
  };

  movieSearch = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=e13e47fa&s=harry%20potter"
    );
    const unboxedResponse = await response.json();
    this.setState({
      key: unboxedResponse,
    });
  };

  componentDidMount() {
    this.movieSearch();
  }

  render() {
    return (
      <Carousel variant="dark">
        <Carousel.Item className="d-flex" id="carouselitem">
          <Stack direction="horizontal" gap={1}>
            {this.state.key.Search && this.state.key.Search.map(movie)}
          </Stack>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carousel;
// function carousel() {
//   return (
//     <Carousel variant="dark">
//       <Carousel.Item className="d-flex" id="carouselitem">
{
  /* <Stack direction="horizontal" gap={1}>
<img
  className="d-block w-100"
  src="https://i.ytimg.com/vi/-xz_-p941Ac/maxresdefault.jpg"
  id="movie"
/>
<img
  className="d-block w-100"
  src="https://i.ytimg.com/vi/-xz_-p941Ac/maxresdefault.jpg"
  id="movie"
/>
<img
  className="d-block w-100"
  src="https://i.ytimg.com/vi/-xz_-p941Ac/maxresdefault.jpg"
  id="movie"
/>
<img
  className="d-block w-100"
  src="https://i.ytimg.com/vi/-xz_-p941Ac/maxresdefault.jpg"
  id="movie"
/>
<img
  className="d-block w-100"
  src="https://i.ytimg.com/vi/-xz_-p941Ac/maxresdefault.jpg"
  id="movie"
/>
</Stack> */
}
//       </Carousel.Item>
//     </Carousel>
//   );
// }
