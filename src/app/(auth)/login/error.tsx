"use client";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      error 404 <button onClick={reset}>Try again</button>{" "}
    </div>
  );
};

export default error;
