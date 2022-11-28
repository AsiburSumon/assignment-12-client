import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
  
const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
        .then(()=> {})
        .catch(error => console.error(error))
      }

  return (
    <div className="navbar bg-indigo-500 ... p-3
    mb-2">
      <div className="flex-1">
        <Link to="/" className="btn  normal-case text-2xl">
          Honda-BD
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 text-xl font-serif font-bold text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          {user?.uid?(
              <>
              <button
              onClick={handleSignOut}
              className="btn btn-ghost mx-5 my-auto text-xl bg-blue-600 rounded-xl"
              >
              Log out
              </button>
              </>
            )
            :
             (
              <>
                <Link to='/login'>Login</Link>
              </>
             ) 
            }
          </li>
          <li>
          <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
