import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://moviemate-server.onrender.com/api/movies/trending-with-genres");
        setMovies(res.data);
      } catch (err) {
        console.error("Error fetching movies:", err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-8 py-20 bg-gray-900 text-white min-h-screen">
      {/* Welcome message */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-500">Welcome to MovieMate 🎬</h1>
        <p className="text-gray-300 mt-2">
          Discover trending movies, explore summaries, and build your watchlist with ease.
        </p>
      </div>

      {/* Sliding poster section */}
      <div className="overflow-x-auto whitespace-nowrap mb-12">
        {movies.slice(0, 10).map((m) => (
          <img
            key={m.id}
            src={`https://image.tmdb.org/t/p/w342${m.poster_path}`}
            alt={m.title}
            className="inline-block w-48 h-72 object-cover rounded-lg mx-2 border border-gray-700 hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {/* Trending movies grid */}
      <h2 className="text-2xl font-bold text-yellow-500 mb-4">Trending Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((m) => (
          <div key={m.id} className="border border-gray-700 rounded p-4">
            <img
              src={`https://image.tmdb.org/t/p/w342${m.poster_path}`}
              alt={m.title}
              className="rounded mb-2"
            />
            <h3 className="font-semibold">{m.title}</h3>
            <p className="text-gray-400">⭐ {m.vote_average}</p>
            <p className="text-gray-300 text-sm mt-2">
              {m.overview ? m.overview.slice(0, 100) + "..." : "No summary available"}
            </p>
            <p className="text-yellow-500 text-xs mt-1">
              {m.genres && m.genres.length > 0 ? m.genres.join(", ") : "Unknown genre"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}