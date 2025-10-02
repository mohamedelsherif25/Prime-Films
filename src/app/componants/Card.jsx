"use client";

import Link from "next/link";
import RatingCircle from "./rateing";
import WatchlistHeartButton from "../componants/WatchlistButton.jsx";

export default function Card({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://cdn.booooooom.com/wp-content/uploads/2015/04/emptyfilmposters-08.jpg";

  return (
    <div className="col-md-4 col-sm-6 col-lg-3 mb-4">
      <Link
        href={`/movie/${movie.id}`}
        className="text-decoration-none text-dark"
      >
        <div
          className="card border-0 shadow-sm position-relative h-100"
          style={{
            minHeight: "480px",
            transition: "transform .2s ease, box-shadow .2s ease",
          }}
        >
          <div className="position-relative overflow-hidden">
            <img
              src={posterUrl}
              alt={movie.title}
              className="card-img-top rounded"
              style={{ height: "350px", objectFit: "cover" }}
            />
            <RatingCircle rating={movie.vote_average} />
          </div>
          <div className="card-body text-center">
            <h6 className="card-title mt-3 text-truncate" title={movie.title}>
              {movie.title}
            </h6>
            <div className="d-flex align-items-end justify-content-between mt-2">
              <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                {movie.release_date &&
                  new Date(movie.release_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
              </p>
              <WatchlistHeartButton movieId={movie.id} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
