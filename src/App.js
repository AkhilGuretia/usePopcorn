import { useState } from "react";

const App = () => {
  return (
    <>
      <Navbar />
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

export default App;
