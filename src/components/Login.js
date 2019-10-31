import React from "react";
import "../styles/login.css";
import "./App.css";

const LoginPage = () => {
  return (
    <section className="login-body">
      <section className="login-form-container">
        <form className="login-form" method="post" action="" role="login">
          <img
            src={require("../images/login-logo.png")}
            className="login-logo"
            alt=""
          />
          <h1 className="login-title">Night Owl</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="form-control input-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="form-control input-lg"
          />
          <button
            type="submit"
            name="go"
            className="btn btn-lg btn-primary btn-block"
          >
            Sign in
          </button>
          <div>
            <a href="#">Dont have an account? Register here</a>
          </div>
        </form>
      </section>
    </section>
  );
};

export default LoginPage;
