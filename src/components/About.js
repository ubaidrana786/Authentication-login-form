import React from "react";
import about from "../Assest/Image/about.jpg";

export default function About() {
  return (
    <div className="container ">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 mt-4">
          <h1 className="text-black text-center mb-3">About </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            aliquam, beatae cumque nostrum at quasi obcaecati itaque vero
            blanditiis minima quos id explicabo optio, praesentium illum tempora
            perspiciatis. Explicabo, dolores. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. In aliquam, beatae cumque nostrum at
            quasi obcaecati itaque vero blanditiis minima quos id explicabo
            optio, praesentium illum tempora perspiciatis. Explicabo, dolores.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            aliquam, beatae cumque nostrum at quasi obcaecati itaque vero
            blanditiis minima quos id explicabo optio, praesentium illum tempora
            perspiciatis. Explicabo, dolores.
          </p>
        </div>
        <div className="col-6">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
}
