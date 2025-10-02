"use client";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const generatePages = () => {
    const pages = [];

    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, page + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <nav aria-label="Movies pagination" className="mt-4">
      <ul className="pagination justify-content-center gap-2">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button
            className="page-link border-0 rounded-pill px-3 text-foreground-secondary"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              onPageChange(page - 1);
            }}
            aria-label="Previous page"
            disabled={page === 1}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </li>

        {generatePages().map((pg) => (
          <li key={pg} className={`page-item`}>
            <button
              className={`page-link border-0 rounded-pill px-3 ${
                pg === page
                  ? "bg-primary text-white"
                  : "bg-surface-2 text-foreground-secondary"
              }`}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                onPageChange(pg);
              }}
              aria-current={pg === page ? "page" : undefined}
              aria-label={`Go to page ${pg}`}
            >
              {pg}
            </button>
          </li>
        ))}

        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link border-0 rounded-pill px-3 text-foreground-secondary"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              onPageChange(page + 1);
            }}
            aria-label="Next page"
            disabled={page === totalPages}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
