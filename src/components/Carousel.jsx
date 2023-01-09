import { Component } from "react";
import React, { useState, useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";
import { Carousel, Stack, Spinner, Row, Col } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
import "../scss/style.scss";
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
        "https://www.omdbapi.com/?apikey=e13e47fa&s=marvel"
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
        <h3 id="headings" className="award-winning mb-4 mt-4">
          Award Winning Franchises
        </h3>
        <div id="carousel-main-body" className="me-4 mx-4">
          <span className="d-flex justify-content-between align-items-center mt-2 mb-2 ">
            <h4 id="no-p-no-m">Star Wars Franchise</h4>
            <h4 id="no-p-no-m">
              <BsChevronRight className="text-red-darker" />
            </h4>
          </span>

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
                      <Col style={{ zIndex: 1 }}>
                        <div class="content">
                          <img
                            className="w-100 mb-2"
                            src={movie.Poster}
                            alt={movie.Title}
                            id="movie"
                            key1={movie.imdbID}
                          />
                          <div class="overlay" style={{ zIndex: "3" }}>
                            <div id="center">
                              <AiFillPlayCircle
                                className="text-light"
                                style={{ borderRadius: "50%" }}
                                size={50}
                              />
                            </div>
                            <div>
                              <div>
                                <h5>{movie.Title}</h5>
                              </div>
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
                      <Col style={{ zIndex: 1 }}>
                        <div class="content">
                          <img
                            className="w-100 mb-2"
                            src={movie.Poster}
                            alt={movie.Title}
                            id="movie"
                            key1={movie.imdbID}
                          />
                          <div class="overlay" style={{ zIndex: "3" }}>
                            <div id="center">
                              <AiFillPlayCircle
                                className="text-light"
                                style={{ borderRadius: "50%" }}
                                size={50}
                              />
                            </div>
                            <div>
                              <div>
                                <h5>{movie.Title}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>

          <span className="d-flex justify-content-between align-items-center mt-2 mb-2 ">
            <h4 id="no-p-no-m" className="text-truncate">
              Marvel Cinematic Universe
            </h4>
            <h4>
              <BsChevronRight className="text-red-darker" />
            </h4>
          </span>

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
                      <Col style={{ zIndex: 1 }}>
                        <div class="content">
                          <img
                            className="w-100 mb-2"
                            src={movie.Poster}
                            alt={movie.Title}
                            id="movie"
                            key1={movie.imdbID}
                          />
                          <div class="overlay" style={{ zIndex: "3" }}>
                            <div id="center">
                              <AiFillPlayCircle
                                className="text-light"
                                style={{ borderRadius: "50%" }}
                                size={50}
                              />
                            </div>
                            <div>
                              <div>
                                <h5>{movie.Title}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="row-cols-7">
                  {this.state.key2.Search &&
                    this.state.key2.Search.slice(3, 10).map((movie) => (
                      <Col style={{ zIndex: 1 }}>
                        <div class="content">
                          <img
                            className="w-100 mb-2"
                            src={movie.Poster}
                            alt={movie.Title}
                            id="movie"
                            key1={movie.imdbID}
                          />
                          <div class="overlay" style={{ zIndex: "3" }}>
                            <div id="center">
                              <AiFillPlayCircle
                                className="text-light"
                                style={{ borderRadius: "50%" }}
                                size={50}
                              />
                            </div>
                            <div>
                              <div>
                                <h5>{movie.Title}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>

          <span className="d-flex justify-content-between align-items-center mt-2 mb-2 ">
            <h4 id="no-p-no-m">Star Trek Franchise</h4>
            <h4 id="no-p-no-m">
              <BsChevronRight className="text-red-darker" />
            </h4>
          </span>
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
                      <Col style={{ zIndex: 1 }}>
                        <div class="content">
                          <img
                            className="w-100 mb-2"
                            src={movie.Poster}
                            alt={movie.Title}
                            id="movie"
                            key1={movie.imdbID}
                          />
                          <div class="overlay" style={{ zIndex: "3" }}>
                            <div id="center">
                              <AiFillPlayCircle
                                className="text-light"
                                style={{ borderRadius: "50%" }}
                                size={50}
                              />
                            </div>
                            <div>
                              <div>
                                <h5>{movie.Title}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="row-cols-7">
                  {this.state.key3.Search &&
                    this.state.key3.Search.slice(3, 10).map((movie) => (
                      <Col style={{ zIndex: 1 }}>
                        <div class="content">
                          <img
                            className="w-100 mb-2"
                            src={movie.Poster}
                            alt={movie.Title}
                            id="movie"
                            key1={movie.imdbID}
                          />
                          <div class="overlay" style={{ zIndex: "3" }}>
                            <div id="center">
                              <AiFillPlayCircle
                                className="text-light"
                                style={{ borderRadius: "50%" }}
                                size={50}
                              />
                            </div>
                            <div>
                              <div>
                                <h5>{movie.Title}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default carousel;
