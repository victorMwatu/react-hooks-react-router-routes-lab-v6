import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(d => setMovie(d))
  }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        { movie.map(movie => <MovieCard key={movie.id} title={movie.title} id={movie.id} />) }
      </main>
    </>
  );
};

export default Home;
