import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p className="px-8 text-gray-400">Loading...</p>;

  return (
    <section className="px-8 py-20 text-white">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">{movie.title}</h2>
      <p className="text-gray-300 mb-2">{movie.overview}</p>
      <p className="text-gray-400">Release: {movie.release_date}</p>
      <p className="text-gray-400">⭐ {movie.vote_average}</p>
    </section>
  );
}