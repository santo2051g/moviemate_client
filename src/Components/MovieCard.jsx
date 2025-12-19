import { Link } from "react-router-dom";

export default function MovieCard({ movie, onAdd, onRemove, inWatchlist }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "https://via.placeholder.com/342x513?text=No+Image";

  return (
    <div className="card" style={{ padding: "12px", border: "1px solid #333", borderRadius: "8px" }}>
      <img src={poster} alt={movie.title} style={{ width: "100%", borderRadius: "6px" }} />
      <h4>{movie.title}</h4>
      <p>⭐ {movie.vote_average?.toFixed(1) ?? "—"}</p>
      <div style={{ display: "flex", gap: "8px" }}>
        <Link to={`/movie/${movie.id}`} className="btn">Details</Link>
        {inWatchlist ? (
          <button className="btn" onClick={() => onRemove(movie._id)}>Remove</button>
        ) : (
          <button className="btn primary" onClick={() => onAdd(movie)}>+ Watchlist</button>
        )}
      </div>
    </div>
  );
}