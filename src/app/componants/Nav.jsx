"use client";
import Link from "next/link";
import { useWatchlist } from "../context/WatchlistContext";

export default function Nav() {
  const { count } = useWatchlist();

  return (
    <nav className="navbar navbar-expand sticky-top shadow-sm bg-surface border-bottom border-soft">
      <div className="container">
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-2 fw-bold"
        >
          <span className="fs-4">🎬</span>
          <span className="fs-5">Prime Films</span>
        </Link>

        <div className="ms-auto d-flex align-items-center">
          <Link
            href="/watchlist"
            className="position-relative text-decoration-none fw-medium text-light"
          >
            <span className="me-2">❤️ Watchlist</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {count}
              <span className="visually-hidden">items in watchlist</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
