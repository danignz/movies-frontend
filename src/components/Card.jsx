import React from "react";
import { Link } from "react-router-dom";

export default function Card({ movieData }) {
  return (
    <div>
      <h2>{<Link to={`/movie/${movieData._id}`}>{movieData.title}</Link>}</h2>
      <img
        width={250}
        src={movieData.image}
        alt={`Pic of ${movieData.title}`}
      />
    </div>
  );
}
