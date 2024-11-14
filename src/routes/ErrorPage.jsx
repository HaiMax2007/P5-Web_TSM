import React from "react";

const ErrorPage = () => {
  return (
    <div className="errorHelo">
      <div className="error__modal">
        <img src="/warning.png" alt="Warning Page" />
        <h1>oops! something went wrong</h1>
        <p>sorry, the page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
