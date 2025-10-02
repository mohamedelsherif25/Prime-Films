"use client";

export default function SkeletonCard() {
  return (
    <div className="col-md-4 col-sm-6 col-lg-3 mb-4">
      <div className="card border-0 shadow-sm" style={{ minHeight: "480px" }}>
        <div
          className="rounded"
          style={{
            height: "350px",
            background:
              "linear-gradient(90deg, var(--surface-2) 25%, var(--surface-3) 37%, var(--surface-2) 63%)",
            backgroundSize: "400% 100%",
            animation: "skeleton 1.4s ease infinite",
          }}
        />
        <div className="card-body">
          <div
            className="rounded mb-2"
            style={{ height: "20px", backgroundColor: "var(--surface-2)" }}
          />
          <div className="d-flex justify-content-between">
            <div
              className="rounded"
              style={{
                width: "40%",
                height: "14px",
                backgroundColor: "var(--surface-3)",
              }}
            />
            <div
              className="rounded"
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "var(--surface-3)",
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes skeleton {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0 50%;
          }
        }
      `}</style>
    </div>
  );
}
