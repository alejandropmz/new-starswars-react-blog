import React from "react";

export const Footer = () => {
  return (
    <div className="container-fluid footer-container">
      <div className="text-social-medias">
        <p>
          <strong>More From Star Wars:</strong>
        </p>
        <div className="d-flex justify-content-center">
          <i className="bx bxl-facebook-circle"></i>
          <i className="bx bxl-instagram-alt"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-youtube"></i>
        </div>
      </div>
      <div className="terms-conditions">
        <p>
          <strong>TM & © Lucasfilm Ltd. All Rights Reserved</strong>
        </p>
        <div className="terms-conditions-items d-flex justify-content-center">
          <div className="items">
            <small>Terms of Use</small>
            <span> | </span>
            <small>Additional Content Information</small>
            <span> | </span>
            <small>Privacy Policy</small>
            <span> | </span>
            <small>Children's Online Privacy Policy</small>
            <span> | </span>
            <small>Your California Privacy Rights</small>
            <span> | </span>
            <small>Star Wars at shopDisney</small>
            <span> | </span>
            <small>Star Wars Helpdesk</small>
            <span> | </span>
            <small>Interest-Based Ads</small>
            <span> | </span>
            <small>Do Not Sell My Personal Information</small>
          </div>
        </div>
      </div>
    </div>
  );
};
