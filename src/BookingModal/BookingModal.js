import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const BookingModal = ({product}) => {
  const { _id, brand, productName, image, resalePrice } = product;
  const { user } = useContext(AuthContext);

  const handleBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;

    const bookedProduct = {
      buyerName: user?.displayName || 'User',
      buyerEmail: user?.email,
      buyerImg: user?.photoURL,
      brand: brand,
      productName: productName,
      productImage: image,
      price: resalePrice,
      location,
      phone,
    };

    fetch("https://assignment12-server-henna.vercel.app/bookingOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Booking Successfully Done");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
      <div>
        <input type="checkbox" id={`"booking-modal-${_id}"`} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor={`"booking-modal-${_id}"`}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              X
            </label>
            <div>
              <img src={image} alt="no img" />
            </div>
              <form
                onSubmit={handleBook}
                className="grid grid-cols-1 gap-4 mt-10"
              >
                <input
                  type="text"
                  name="displayName"
                  disabled
                  defaultValue={user?.displayName}
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
                <input
                  style={{ height: "100px", width: "100px" }}
                  type="image"
                  src={user?.photoURL}
                  name="photoURL"
                  disabled
                  alt="no img"
                  placeholder="Your Photo"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="email"
                  disabled
                  defaultValue={user?.email}
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="brandName"
                  disabled
                  defaultValue={brand}
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="ProductName"
                  disabled
                  defaultValue={productName}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="productImage"
                  disabled
                  defaultValue={image}
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="price"
                  disabled
                  defaultValue={resalePrice}
                  placeholder="Resale Price"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered w-full"
                />{" "}
                <br />
                <button className="btn btn-primary" type="submit">
                  Add Product
                </button>
              </form>
          </div>
        </div>
      </div>
  );
};

export default BookingModal;
