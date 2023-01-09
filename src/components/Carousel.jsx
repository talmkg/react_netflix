import { Component } from "react";
import React, { useState, useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";
import { Carousel, Stack, Spinner, Row, Col } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
import "../scss/style.scss";
import movies from "../database/movies.json";
import Movie from "./Movie";
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
        <h3>Popular on Netflix:</h3>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {movies.map((movie) => (
            <Movie {...movie} />
          ))}
        </Row>
      </>
    );
  }
}

export default carousel;
