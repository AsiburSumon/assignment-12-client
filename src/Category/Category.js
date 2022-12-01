import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { img, category_name } = category;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img style={{height: "200px"}} src={img} alt="brand" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category_name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"> <Link to={`/product/${category_name}`}>Show Products</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
