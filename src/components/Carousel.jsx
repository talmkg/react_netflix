import { Component } from "react";
import React, { useState, useEffect } from "react";
import { Carousel, Stack, Spinner, Row, Col } from "react-bootstrap";
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
        "http://www.omdbapi.com/?apikey=e13e47fa&s=star%20trek"
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
        <div className="d-flex justify-content-center align-items-center">
          {this.state.isLoading && (
            <Spinner
              animation="border"
              role="status"
              className="custom-spinner-color"
            >
              <span className="sr-only"></span>
            </Spinner>
          )}
        </div>
        <h4>Trending Now</h4>

        <div>
          <Carousel>
            <Carousel.Item>
              <Row className="row-cols-2">
                {this.state.key1.Search &&
                  this.state.key1.Search.slice(0, 6).map((movie) => (
                    <Col>
                      <img
                        className="w-100 mb-2"
                        src={movie.Poster}
                        alt={movie.Title}
                        id="movie"
                        key1={movie.imdbID}
                      />
                    </Col>
                  ))}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="row-cols-6">
                {this.state.key1.Search &&
                  this.state.key1.Search.slice(4, 10).map((movie) => (
                    <Col>
                      <img
                        className="w-100"
                        src={movie.Poster}
                        alt={movie.Title}
                        id="movie"
                        key1={movie.imdbID}
                      />
                    </Col>
                  ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>

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
