const BASE_URL = "http://localhost:4000/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json" }
  });
  return res.json();
}

export const api = {
  getWatchlist: () => request("/watchlist"),
  addToWatchlist: (movie) => request("/watchlist", { method: "POST", body: JSON.stringify(movie) }),
  updateWatchlist: (id, body) => request(`/watchlist/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  removeFromWatchlist: (id) => request(`/watchlist/${id}`, { method: "DELETE" }),
};