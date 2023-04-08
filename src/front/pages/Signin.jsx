import React from "react";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <div className="container-fluid">
      <div className="sign-container d-flex align-items-around">
        <div className="title">
          <h3>SIGN IN</h3>
        </div>
        <div className="forms">
          <form id="forms" action="">
            <label htmlFor="">
              <small>Username</small>
            </label>
            <br />
            <input id="username" type="text" placeholder="Type your username" />
            <br />
            <label htmlFor="">
              <small>Password</small>
            </label>
            <br />
            <input id="password" type="text" placeholder="Type your password" />
            <br />
            <div id="forgot" className=" d-flex justify-content-end">
              <Link id="forgot-password-link">
                <small>Forgot password?</small>
              </Link>
            </div>
            <button id="form-button" type="submit">
              Sign in
            </button>
          </form>
        </div>
        <div className="sign-footer d-flex flex-column align-items-center">
          <div className="social-medias d-flex">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-google"></i>
          </div>
          <small>Or sign up</small>
        </div>
      </div>
    </div>
  );
};
