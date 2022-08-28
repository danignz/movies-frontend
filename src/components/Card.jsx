import React from "react";
import { Link } from "react-router-dom";

export default function Card({ movieData }) {
  return (
    <div>
      {
        <Link to={`/movie/${movieData._id}`}>
          <h2>{movieData.title}</h2>
          <img
            height={250}
            src={movieData.image}
            alt={`Pic of ${movieData.title}`}
          />
        </Link>
      }
    </div>
  );
}
