import { Col } from "react-bootstrap";
const Movie = (movie) => {
  return (
    <Col>
      <div class="content">
        <img
          src={movie.Cover}
          id="overlay"
          className="w-100 movie image"
          style={{ zIndex: 0 }}
        />
        <div className="overlay d-flex align-items-end" style={{ zIndex: "9" }}>
          <div>
            <h5>{movie.Title}</h5>
            <span className="text-muted ">
              <p className="no-p-no-m">{movie.Type}</p>
              <p>
                Seasons: {movie.Seasons} • Episodes: {movie.Episodes}
              </p>
            </span>
            <p className="truncate">{movie.Description}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default Movie;
