import React from "react";
import "../styles/login.css";
import {logo} from "../public/NightOwlLogo.png"

const LoginPage = () => {
  return (
    <section className="container">
      <section className="login-form">
        <form method="post" action="" role="login">
          <img src={logo} className="img-responsive" alt="" />
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
            <a href="#">Create account</a> or <a href="#">reset password</a>
          </div>
        </form>
        <div className="form-links">
          <a href="#">www.website.com</a>
        </div>
      </section>
    </section>
  );
};

export default LoginPage;
