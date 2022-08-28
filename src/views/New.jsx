import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function New() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    year: 0,
    director: "",
    duration: 0,
    synopsis: "",
    image: "",
  });

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
      const newMovie = await axios.post(
        "http://localhost:8000/api/v1/movies",
        movie
      );
      navigate(`/movie/${newMovie.data.data._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create a movie</h2>

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
    </div>
  );
}
