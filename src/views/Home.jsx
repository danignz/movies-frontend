import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/movies");
        //console.log(response)
        setMovies(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Home</h2>

      {!movies && <p>Loading</p>}
      {movies &&
        movies.map((movie) => {
          return <Card key={movie._id} movieData={movie} />;
        })}
    </div>
  );
}
