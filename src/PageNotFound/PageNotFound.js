import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="text-center">
        <div className="text-red-500 text-center my-40">404 No page found <br />
        <Link className="text-blue-600 font-bold text-2xl" to="/">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
