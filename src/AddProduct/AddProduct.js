import React, { useState } from "react";

const AddProduct = () => {
  const [products, setProducts] = useState({});

  const handleAddProduct = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Product added");
          event.target.reset();
        }
      });
  };
  const handleInput = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newProducts = { ...products };
    newProducts[field] = value;
    setProducts(newProducts);
  };
  return (
    <form onSubmit={handleAddProduct}>
      <div className="card w-full max-w-screen-md  shadow-2xl bg-base-100 mx-auto mb-10">
        <h2 className="text-center text-blue-500 font-bold text-2xl font-mono">Add Your Product</h2>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="sellerName"
              name="sellerName"
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="sellerEmail"
              name="sellerEmail"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
          <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea className="pt-5 bg-gray-200" name="description" 
              onBlur={handleInput}
              cols="10" rows="5" placeholder="type here" required></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="image url"
              name="image"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="brand"
              name="brand"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="location"
              name="location"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="productName"
              name="productName"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="orginalPrice"
              name="orginalPrice"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resale price</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="resalePrice"
              name="resalePrice"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Year of purchase</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="yearOfPurchase"
              name="yearOfPurchase"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Year of use</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="yearOfUse"
              name="yearOfUse"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="phone"
              name="phone"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Post of date</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="date-month-year"
              name="postOfDate"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Condition</span>
            </label>
            <input
              onBlur={handleInput}
              type="text"
              placeholder="condition"
              name="condition"
              required
              className="input input-bordered"
            />
          </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
