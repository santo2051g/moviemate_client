import React from "react";

const About = () => {
  return (
    <div className="px-8 py-20 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">About MovieMate</h1>
      
      <p className="text-gray-300 mb-4">
        MovieMate is a personal movie tracker built to help you organize and manage
        your watchlist. Whether you’re keeping track of classics you love or new
        releases you don’t want to miss, MovieMate makes it simple to add, edit, and
        delete movies in one place.
      </p>

      <p className="text-gray-300 mb-4">
        This project is powered by <span className="text-yellow-500">React</span> on the frontend
        and <span className="text-yellow-500">Express + MongoDB</span> on the backend. It also integrates
        with the TMDB API to fetch trending movies and genres.
      </p>

      <p className="text-gray-300 mb-4">
        Features include:
      </p>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Add, edit, and delete movies in your watchlist</li>
        <li>Clear your entire watchlist with one click</li>
        <li>View trending movies with genre information</li>
        <li>Simple, clean UI with Tailwind styling</li>
      </ul>

      <p className="text-gray-300">
        Built by <span className="text-yellow-500">Santhosh</span> as a Mern‑stack learning project,
        MovieMate is designed to be modular, secure, and user‑friendly.
      </p>
    </div>
  );
};

export default About;