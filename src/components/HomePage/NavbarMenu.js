import React from "react";
import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router";
export const NavbarMenu = () => {
  let history = useHistory();
  function logout(e) {
    e.preventDefault();
    localStorage.clear();
    history.push("./login");
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="/">
            Reaact Course
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link active text-white"
                  aria-current="page"
                  to="/all"
                >
                  Registered Users
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn bg-white" onClick={logout}>
                Log Out
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
