import React from "react";

export const Inicio = () => {
  return (
    <div className="col-lg-12 d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <svg className="bd-placeholder-img rounded-circle mx-auto" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
        </svg>
        <h2 className="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns <br /> 
            of text below the carousel. This is the first column.</p>
        <p><a className="btn btn-secondary" href="#">View details »</a></p>
      </div>
    </div>
  );
};
