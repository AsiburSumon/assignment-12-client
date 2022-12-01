import React from "react";

const Product = ({ product }) => {
  const {
    sellerName,
    sellerEmail,
    description,
    image,
    brand,
    location,
    productName,
    orginalPrice,
    resalePrice,
    yearOfPurchase,
    yearOfUse,
    phone,
    postOfDate,
    condition,
  } = product;
  return (
    <div className="text-left">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img style={{height: "300px"}} src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Product Name: {productName}</h2>
          <h4 className="font-bold">Brand: {brand}</h4>
          <h4 className="font-bold">Seller: {sellerName}</h4>
          <h4 className="font-bold">Email: {sellerEmail}</h4>
          <h4 className="font-bold">Location: {location}</h4>
          <h4 className="font-bold">Original Price: {orginalPrice}</h4>
          <h4 className="font-bold">Resale Price: {resalePrice}</h4>
          <h4 className="font-bold">Year of purchase: {yearOfPurchase}</h4>
          <h4 className="font-bold">Year of use: {yearOfUse}</h4>
          <p className="font-bold">Phone: {phone}</p>
          <p className="font-bold">Post date: {postOfDate}</p>
          <p className="font-bold">Condition: {condition}</p>
          <p className="font-bold">Description: {description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
