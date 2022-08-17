import React, { useEffect } from "react";
import "../styles/header.css";

function Header() {

  useEffect(() => {
    setTimeout(function () {
      document.getElementsByClassName('carousel-control-next-icon')[0].click();
    }, 5000);

  }, [])

  return (
    <>
      <header className="bg-light border-bottom mb-4">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="15000">
              <img
                src={`${process.env.PUBLIC_URL + "/images/header/header1.jpg"}`}
                className="d-block w-100"
                style={{ height: "50vh" }}
                alt="tiendas manga"
              />
              <div
                className="carousel-caption"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <h1 className="fw-bolder headerText">
                  Encuentra una tienda manga confiable cerca de tí!
                </h1>
                <p className="fw-bolder lead mb-0 headerSubText">
                  Buscador de tiendas manga en Perú
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={`${process.env.PUBLIC_URL + "/images/header/header2.jpg"}`}
                className="d-block w-100"
                style={{ height: "50vh" }}
                alt="tiendas manga"
              />
              <div
                className="carousel-caption"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <h1 className="fw-bolder headerText">
                  Encuentra una tienda manga confiable cerca de tí!
                </h1>
                <p className="fw-bolder lead mb-0 headerSubText">
                  Buscador de tiendas manga en Perú
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={`${process.env.PUBLIC_URL + "/images/header/header3.jpg"}`}
                className="d-block w-100"
                style={{ height: "50vh" }}
                alt="tiendas manga"
              />
              <div
                className="carousel-caption"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <h1 className="fw-bolder headerText">
                  Encuentra una tienda manga confiable cerca de tí!
                </h1>
                <p className="fw-bolder lead mb-0 headerSubText">
                  Buscador de tiendas manga en Perú
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
