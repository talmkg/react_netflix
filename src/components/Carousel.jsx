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
        "https://www.omdbapi.com/?apikey=e13e47fa&s=star+wars"
      );
      const response2 = await fetch(
        "https://www.omdbapi.com/?apikey=e13e47fa&s=lord%20of%20the%20rings"
      );
      const response3 = await fetch(
        "https://www.omdbapi.com/?apikey=e13e47fa&s=star%20trek"
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
        <h3 id="headings" className="award-winning">
          Award Winning Franchises
        </h3>
        <h4 id="headings">Star Wars Franchise</h4>
        <div>
          {/* mobile version*/}
          <Carousel id="mobile-view-first-carousel">
            {this.state.key1.Search &&
              this.state.key1.Search.slice(0, 10).map((movie) => (
                <Carousel.Item>
                  <div class="content">
                    <img
                      className="w-100 mb-2"
                      src={movie.Poster}
                      alt={movie.Title}
                      id="movie"
                      key1={movie.imdbID}
                    />
                    <div class="overlay" style={{ zIndex: "3" }}>
                      <div>
                        <span className="d-flex mb-4">
                          <h3>{movie.Title}</h3>
                        </span>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
          {/* desktop version */}
          <Carousel id="desktop-view-first-carousel">
            <Carousel.Item>
              <Row className=" row-cols-7">
                {this.state.key1.Search &&
                  this.state.key1.Search.slice(0, 7).map((movie) => (
                    <Col style={{ zIndex: 3 }}>
                      <div class="content">
                        <img
                          className="w-100 mb-2"
                          src={movie.Poster}
                          alt={movie.Title}
                          id="movie"
                          key1={movie.imdbID}
                        />
                        <div class="overlay" style={{ zIndex: "3" }}>
                          <div>
                            <span className="d-flex mb-2">
                              <h5>{movie.Title}</h5>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="row-cols-7">
                {this.state.key1.Search &&
                  this.state.key1.Search.slice(3, 10).map((movie) => (
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
          </Carousel>
        </div>

        <h4 id="headings">Lord Of The Rings Franchise</h4>

        <div>
          {/* mobile version*/}
          <Carousel id="mobile-view-first-carousel">
            {this.state.key2.Search &&
              this.state.key2.Search.slice(0, 10).map((movie) => (
                <Carousel.Item>
                  <div class="content">
                    <img
                      className="w-100 mb-2"
                      src={movie.Poster}
                      alt={movie.Title}
                      id="movie"
                      key1={movie.imdbID}
                    />
                    <div class="overlay" style={{ zIndex: "3" }}>
                      <div>
                        <span className="d-flex mb-4">
                          <h3>{movie.Title}</h3>
                        </span>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
          {/* desktop version */}
          <Carousel id="desktop-view-first-carousel">
            <Carousel.Item>
              <Row className=" row-cols-7">
                {this.state.key2.Search &&
                  this.state.key2.Search.slice(0, 7).map((movie) => (
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
              <Row className="row-cols-7">
                {this.state.key2.Search &&
                  this.state.key2.Search.slice(3, 10).map((movie) => (
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
          </Carousel>
        </div>
        <h4 id="headings">Star Trek Franchise</h4>
        <div>
          {/* mobile version*/}
          <Carousel id="mobile-view-first-carousel">
            {this.state.key3.Search &&
              this.state.key3.Search.slice(0, 10).map((movie) => (
                <Carousel.Item>
                  <div class="content">
                    <img
                      className="w-100 mb-2"
                      src={movie.Poster}
                      alt={movie.Title}
                      id="movie"
                      key1={movie.imdbID}
                    />
                    <div class="overlay" style={{ zIndex: "3" }}>
                      <div>
                        <span className="d-flex mb-4">
                          <h3>{movie.Title}</h3>
                        </span>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
          {/* desktop version */}
          <Carousel id="desktop-view-first-carousel">
            <Carousel.Item>
              <Row className=" row-cols-7">
                {this.state.key3.Search &&
                  this.state.key3.Search.slice(0, 7).map((movie) => (
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
              <Row className="row-cols-7">
                {this.state.key3.Search &&
                  this.state.key3.Search.slice(3, 10).map((movie) => (
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
          </Carousel>
        </div>
      </>
    );
  }
}

export default carousel;
