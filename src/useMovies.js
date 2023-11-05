import { useEffect, useState } from "react";

const KEY = "f55cb1f1";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new window.AbortController();

    const fetchMoviesData = async () => {
      try {
        setisLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong while fetching the movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setError("");
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };

    if (query.length < 2) {
      setError("");
      setMovies([]);
      return;
    }

    // handleCloseMovie();
    fetchMoviesData();

    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error };
};
