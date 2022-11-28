import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import LoginWithGoogle from '../../../LoginWithGoogle/LoginWithGoogle';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
    
        createUser(email, password, name)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError("");
            form.reset();
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });
      };

    return (
        <div>
            <form
        onSubmit={handleSubmit}
      >
        <div className="hero-content">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <div>
                <LoginWithGoogle></LoginWithGoogle>
              </div>
              <h4 className="py-2">
              <span className="text-red-600">
                Already have an account?
                <br />
                Go to{" "}
                <Link
                  className="text-lg text-blue-600 font-bold "
                  to="/login"
                >
                  Login
                </Link>
              </span>
            </h4>
              <p className="text-red-500">{error}</p>
            </div>
          </div>
        </div>
      </form>
        </div>
    );
};

export default SignUp;