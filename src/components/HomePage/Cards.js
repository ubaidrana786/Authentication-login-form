import React from "react";
export default function Cards(props) {
  return (
    <>
      <div className="col-md-4">
        <div class="card">
          <img src={props.imgsrc} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">{props.paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
}
