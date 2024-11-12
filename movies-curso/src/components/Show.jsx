import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import { fetchData } from "../assets/getMovies";

function Show() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const edges = await fetchData();
        const moviesData = edges.map((edge) => {
          const entity = edge.node.entity;
          return {
            title: entity.titleText.text,
            imageUrl: entity.primaryImage?.url,
            year: entity.releaseDate?.year,
            imdbLink: `https://www.imdb.com/title/${entity.id}`,
          };
        });
        setMovies(moviesData);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie, i) => (
        <Card
          key={i}
          title={movie.title}
          imageUrl={movie.imageUrl}
          year={movie.year}
          imdbLink={movie.imdbLink}
        />
      ))}
    </div>
  );
}

export default Show;
