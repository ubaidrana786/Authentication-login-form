import React from "react";
import image2 from "../Assest/Image/image1.png";
import image1 from "../Assest/Image/image2.jpg";
import image3 from "../Assest/Image/image3.jpeg";

import About from "./About";
import Cards from "./Cards";
import Footer from "./Footer";
import Contactform from "./Contactform";
import CardData from "./CardData";

export const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
          </div>
        </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        <About />
        <div className="container">
          <div className="row gy-4">
            <h1 className="text-center text-black mb-3">Our Skills</h1>
            {CardData.map((val, index) => {
              return (
                <Cards
                  imgsrc={val.imgsrc}
                  title={val.title}
                  paragraph={val.paragraph}
                />
              );
            })}
          </div>
        </div>
        <Contactform />
        <Footer />
      </div>
    </div>
  );
};
