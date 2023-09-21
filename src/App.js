import { useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

const Navbar = () => {

  const [query, setQuery] = useState("");


  return (
    <nav className="nav-bar">

      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>

      <input
        className="search" type="text" placeholder="Search movies..."
        value={query} onChange={(event) => setQuery(event.target.value)}
      />

      <p className="num-results">
        Found <strong>X</strong> results
      </p>

    </nav>
  );
}

const Main = () => {

  return (
    <main className="main">
      <div className="box">

        <button className="btn-toggle">
          +
        </button>

        <ul className="list">
          {tempMovieData.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </ul>

      </div>

      <div className="box">
        <button className="btn-toggle">+</button>

        <Summary />

        <ul className="list">
          {tempWatchedData.map((movie) => (
            <WatchedMovies movie={movie} />
          ))}
        </ul>
      </div>

    </main >
  );
}

const Movie = ({ movie }) => {
  return (
    <li key={movie.imdbID}>

      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>

      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>

    </li>
  );
}

const Summary = () => {

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>Imdb</span>
        </p>
        <p>
          <span>🌟</span>
          <span>User</span>
        </p>
        <p>
          <span>⏳</span>
          <span>avgRun</span>
        </p>
      </div>
    </div>
  );
}

const WatchedMovies = ({ movie }) => {

  return (
    <li key={movie.imdbID}>

      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>

      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>

    </li >
  );
}

export default App;
