import { Component } from "react";
import { Carousel, Stack, Spinner } from "react-bootstrap";
class carousel extends Component {
  state = {
    key1: [],
    key2: [],
    key3: [],
    isLoading: true,
  };

  movieSearch = async () => {
    try {
      const response1 = await fetch(
        "http://www.omdbapi.com/?apikey=e13e47fa&s=harry%20potter"
      );
      const response2 = await fetch(
        "http://www.omdbapi.com/?apikey=e13e47fa&s=lord%20of%20the%20rings"
      );
      const response3 = await fetch(
        "http://www.omdbapi.com/?apikey=e13e47fa&s=star%20wars"
      );
      if (response1.ok && response2.ok && response3.ok) {
        const unboxedResponse1 = await response1.json();
        const unboxedResponse2 = await response2.json();
        const unboxedResponse3 = await response3.json();
        this.setState({
          key1: unboxedResponse1,
          key2: unboxedResponse2,
          key3: unboxedResponse3,
          isLoading: false,
        });
      } else {
        console.log("Error! Danger! Run!");
        this.setState({
          ...this.state,
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.movieSearch();
  }

  render() {
    return (
      <>
        {this.state.isLoading && (
          <Spinner
            animation="border"
            role="status"
            className="custom-spinner-color"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
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
