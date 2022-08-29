import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./movieCard/MovieCard";
import searchIcon from "./assets/loupe.png";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=8e5e152f";

function App() {
  const [movieName, setMovieName] = useState(['']);
  const [search, setSearch] = useState();

  function searchMovies(title) {
    fetch(`${API}&s=${title}`)
      .then(res => res.json())
      .then(data => setMovieName(data.Search))
  };


  useEffect(() => {
    searchMovies("iron man");
  }, []);

  return (
    <>
      <div className="searchBar">
        <input type="text" placeholder="Enter Movie Name" onChange={(e) => setSearch(e.target.value)} />
        <div className="btn">
          <img onClick={() => searchMovies(search)} src={searchIcon} alt="Search" />
        </div>
      </div>




      <div className="movie">
        {movieName?.length > 0 ? (
          movieName.map((movie, id) => (
            <MovieCard movies={movie} key={id} />
          ))
        ) : (
          <h3>No Movie Found</h3>
        )}
      </div>

    </>
  );
}

export default App;
