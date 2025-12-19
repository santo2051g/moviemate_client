import { useState, useEffect } from "react";
import axios from "axios";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: "", notes: "" });

  useEffect(() => {
    getWatchlist();
  }, []);

  const getWatchlist = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/watchlist");
      setWatchlist(response.data);
    } catch (err) {
      console.error("Error fetching watchlist:", err.message);
    }
  };

  const addMovie = async () => {
    if (!newMovie.title.trim()) return alert("Title is required");
    try {
      await axios.post("http://localhost:4000/api/watchlist", newMovie);
      setNewMovie({ title: "", notes: "" });
      getWatchlist();
    } catch (err) {
      console.error("Error adding movie:", err.message);
    }
  };

  const updateMovie = async (id, oldTitle) => {
    const newTitle = prompt("Enter new movie title", oldTitle);
    if (!newTitle || newTitle.trim() === "") return;
    try {
      await axios.put(`http://localhost:4000/api/watchlist/${id}`, { title: newTitle });
      getWatchlist();
    } catch (err) {
      console.error("Error updating movie:", err.message);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/watchlist/${id}`);
      getWatchlist();
    } catch (err) {
      console.error("Error deleting movie:", err.message);
    }
  };

  const deleteAllMovies = async () => {
    if (!window.confirm("Are you sure you want to delete all movies?")) return;
    try {
      await axios.delete("http://localhost:4000/api/watchlist");
      setWatchlist([]);
    } catch (err) {
      console.error("Error deleting all movies:", err.message);
    }
  };

  return (
    <div className="px-8 py-20 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold text-yellow-500 mb-4">My Watchlist</h2>

      {/* Add Movie Form */}
      <div className="mb-6 p-4 border border-gray-700 rounded bg-gray-800">
        <h3 className="text-lg font-semibold mb-2">Add a Movie</h3>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          className="block w-full mb-2 p-2 rounded bg-gray-700 text-white"
        />
        <textarea
          placeholder="Notes (optional)"
          value={newMovie.notes}
          onChange={(e) => setNewMovie({ ...newMovie, notes: e.target.value })}
          className="block w-full mb-2 p-2 rounded bg-gray-700 text-white"
        />
        <button
          onClick={addMovie}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Movie
        </button>
      </div>

   
      {watchlist.length > 0 && (
        <button
          onClick={deleteAllMovies}
          className="mb-6 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
        >
          Delete All
        </button>
      )}

      {watchlist.length === 0 ? (
        <p className="text-gray-400">Your watchlist is empty. Add some movies!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {watchlist.map((m) => (
            <div key={m._id} className="border border-gray-700 rounded p-4">
              <h3 className="font-semibold">{m.title}</h3>
              {m.notes && <p className="text-gray-300 text-sm mt-2">{m.notes}</p>}
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => updateMovie(m._id, m.title)}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteMovie(m._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;