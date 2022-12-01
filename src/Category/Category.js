import React from "react";

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
          <button className="btn btn-primary">Show Products</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
