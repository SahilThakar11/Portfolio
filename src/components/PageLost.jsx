import React from "react";

const PageLost = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-9xl text-primary font-bold">404 </h1>
      <h2 className="text-4xl text-secondary font-semibold ml-2">
        Page Not Found
      </h2>
      <p className="text-gray-200 mt-4">
        The page you are looking for does not exist.
      </p>

      <a href="/" className="text-primary font-bold underline mt-4">
        Go back to Home
      </a>
    </div>
  );
};

export default PageLost;
