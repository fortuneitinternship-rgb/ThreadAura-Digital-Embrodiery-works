function Register() {
  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card p-4 shadow-sm">

            <h2 className="text-center mb-4">
              Create Account
            </h2>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email Address"
            />

            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Phone Number"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Confirm Password"
            />

            <button className="btn btn-dark w-100">
              Register
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;