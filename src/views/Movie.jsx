import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/movies/${id}`
        );
        //console.log(response);
        setMovie(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/movies/${id}`);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Movie details</h2>

      {movie && (
        <div id="container">
          <p>
            <b>Movie:</b> {movie.title}
          </p>
          <p>
            <b>Year:</b> {movie.year}
          </p>
          <p>
            <b>Director:</b> {movie.director}
          </p>
          <p>
            <b>Duration:</b> {movie.duration}
          </p>
          <p>
            <b>Synopsis:</b> {movie.synopsis}
          </p>
          <p>
            <img width={300} src={movie.image} alt={`Pic of ${movie.title}`} />
          </p>
          <button className="btn-style2" onClick={handleDelete}>
            Delete movie
          </button>
          <button
            className="btn-style3"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit movie
          </button>
        </div>
      )}
      {!movie && <p>Movie not found</p>}
    </div>
  );
}
