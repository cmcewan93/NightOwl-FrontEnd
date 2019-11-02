import React, { useState } from "react";
import "../styles/login.css";
import "./App.css";
import axios from "axios";

const LoginPage = props => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleLogin = (email, password) => {
    // console.log("checking login", email, password);
    axios
      .post("/login", {
        email: email,
        password: password
      })
      .then(body => {
        // set the state of the react app to store user as logged in
        if (body.data.code === 201) {
          props.setAuth(true);
        } else {
          props.setAuth(false);
        }
      })
      .catch(error => {
        console.log(error);
        // show erorr on page saying login failed
      });
  };

  return (
    <section className="login-body">
      <section className="login-form-container">
        <form
          className="login-form"
          method="post"
          action="/MapView"
          role="login"
          onSubmit={event => {
            event.preventDefault();
            handleLogin(state.email, state.password);
          }}
        >
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
            value={state.email}
            onChange={event => {
              setState({ ...state, email: event.target.value });
            }}
            className="form-control input-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={state.password}
            onChange={event => {
              setState({ ...state, password: event.target.value });
            }}
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
