import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/signup.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import Watchlist from "./pages/WatchList.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
     
    </>
  );
}