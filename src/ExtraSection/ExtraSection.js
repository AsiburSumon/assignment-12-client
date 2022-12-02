import React from "react";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";

const ExtraSection = () => {
  return (
    <div className="mb-10">
      <h1 className="text-2xl text-center text-red-700 font-bold">
        Our Satisfied Customers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Img" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img2} alt="Img" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img3} alt="Img" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
