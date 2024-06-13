import React from "react";
import { Link } from "react-router-dom";

export default function Nevbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-bg text-color-1 ">
      <div className="container-fluid">
        <Link className="navbar-brand text-color-1 fs-2" to="Home">
          Noxe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className="nav-link active text-color-1"
                aria-current="page"
                to={"Home"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-color-1"
                aria-current="page"
                to={"Movies"}
              >
                Movies
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active text-color-1"
                aria-current="page"
                to={"Tvshow"}
              >
                Tvshow
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-color-1"
                aria-current="page"
                to={"People"}
              >
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-color-1"
                aria-current="page"
                to={"About"}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-color-1"
                aria-current="page"
                to={"NetWorks"}
              >
                NetWorks
              </Link>
            </li>
          </ul>
          {/* the part of rigth */}
          <form className="d-flex align-items-center" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <i className="fa-brands m-1 fs-4 fa-facebook "></i>
              <i className="fa-brands m-1 fs-4 fa-youtube"></i>

              <i className="fa-brands m-1 fs-4 fa-instagram"></i>
              <i className="fa-brands m-1 fs-4 fa-whatsapp"></i>
            </ul>

            <button
              className="btn btn-outline-darak text-color-1"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}