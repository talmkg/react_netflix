import { Component } from "react";
import { Carousel, Stack } from "react-bootstrap";
class carousel extends Component {
  state = {
    key1: [],
    key2: [],
    key3: [],
  };

  movieSearch = async () => {
    const response1 = await fetch(
      "http://www.omdbapi.com/?apikey=e13e47fa&s=harry%20potter"
    );
    const response2 = await fetch(
      "http://www.omdbapi.com/?apikey=e13e47fa&s=lord%20of%20the%20rings"
    );
    const response3 = await fetch(
      "http://www.omdbapi.com/?apikey=e13e47fa&s=star%20wars"
    );
    const unboxedResponse1 = await response1.json();
    const unboxedResponse2 = await response2.json();
    const unboxedResponse3 = await response3.json();
    this.setState({
      key1: unboxedResponse1,
      key2: unboxedResponse2,
      key3: unboxedResponse3,
    });
    console.log(unboxedResponse2);
  };

  componentDidMount() {
    this.movieSearch();
  }

  render() {
    return (
      <>
        <h4>Trending Now</h4>

        <Carousel fade>
          <Carousel.Item className="d-flex">
            <Stack direction="horizontal" gap={2}>
              {this.state.key1.Search &&
                this.state.key1.Search.slice(0, 8).map((movie) => (
                  <img
                    className="d-block w-100"
                    src={movie.Poster}
                    alt={movie.Title}
                    id="movie"
                    key1={movie.imdbID}
                  />
                ))}
            </Stack>
          </Carousel.Item>
        </Carousel>
        <h4>Watch It Again</h4>
        <Carousel fade>
          <Carousel.Item className="d-flex">
            <Stack direction="horizontal" gap={2}>
              {this.state.key2.Search &&
                this.state.key2.Search.slice(0, 8).map((movie) => (
                  <img
                    className="d-block w-100"
                    src={movie.Poster}
                    alt={movie.Title}
                    id="movie"
                    key2={movie.imdbID}
                  />
                ))}
            </Stack>
          </Carousel.Item>
        </Carousel>
        <h4>New Releases</h4>
        <Carousel fade>
          <Carousel.Item className="d-flex">
            <Stack direction="horizontal" gap={2}>
              {this.state.key3.Search &&
                this.state.key3.Search.slice(0, 8).map((movie) => (
                  <img
                    className="d-block w-100"
                    src={movie.Poster}
                    alt={movie.Title}
                    id="movie"
                    key3={movie.imdbID}
                  />
                ))}
            </Stack>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default carousel;
