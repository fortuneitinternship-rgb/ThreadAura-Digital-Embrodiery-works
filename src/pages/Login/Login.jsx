import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card p-4 shadow-sm">

            <h2 className="text-center mb-4">
              Login
            </h2>

            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
            />

            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter your password"
            />

            <button className="btn btn-dark w-100">
              Login
            </button>

            <p className="text-center mt-3">
              Don't have an account?
              {" "}
              <Link to="/register">
                Register
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;