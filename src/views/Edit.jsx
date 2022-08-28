import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const movie = await axios.get(
          `http://localhost:8000/api/v1/movies/${id}`
        );
        setMovie(movie.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  const handleChange = (e) => {
    const parseValue =
      e.target.name === "year" || e.target.name === "duration"
        ? parseInt(e.target.value)
        : e.target.value;

    setMovie((prev) => {
      return {
        ...prev,
        [e.target.name]: parseValue,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const currentMovie = await axios.put(
        `http://localhost:8000/api/v1/movies/${id}`,
        movie
      );
      navigate(`/movie/${currentMovie.data.data._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit movie</h2>

      {!movie && <p>Loading</p>}
      {movie && (
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={movie.title}
            onChange={handleChange}
          />
          <label>Year</label>
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={movie.year}
            onChange={handleChange}
          />
          <label>Director</label>
          <input
            type="text"
            name="director"
            placeholder="Director"
            value={movie.director}
            onChange={handleChange}
          />
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            placeholder="Duration"
            value={movie.duration}
            onChange={handleChange}
          />
          <label>Synopsis</label>
          <input
            type="text"
            name="synopsis"
            placeholder="Synopsis"
            value={movie.synopsis}
            onChange={handleChange}
          />
          <label>Image</label>
          <input
            type="text"
            name="image"
            placeholder="Image"
            value={movie.image}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}
