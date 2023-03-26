import React from "react";
import './social.css'
import facebook from './images/facebook.svg'
import insta from './images/instagram (1).svg'
import linked from './images/linkedin.svg'

function SocialHandle() {
  return (
    <>
    <div className="box">
      <div className="referal-container">
        <h3 className="head-text">Now Refer & Earn ₹500 for every referral*</h3>
        <p className="terms-text">* Terms and conditions will be applied</p>
      </div>
      <div className="social-container" >
        <div className="about-container">
          <h4 className="head">ABOUT US</h4>
          <p className="tail">Doorstep Wash & Dryclean Service</p>
        </div>
        <div className="home-container">
          <h4 className="head-small">Home</h4>
          <p className="tail-1">Sign In</p>
          <p className="tail-1">Register</p>
        </div>
        <div className="price-container">
          <h4 className="head-small">Pricing</h4>
        </div>
        <div className="career-container">
          <h4 className="head-small">Career</h4>
          <p className="tail-1">Blogs</p>
          <p className="tail-1">Create</p>
        </div>
        <div className="contact-container">
          <h4 className="head-small">Contact</h4>
        </div>
        <div className="media-container">
          <h4 className="head1">SOCIAL MEDIA</h4>
          <div className="image-container">
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={linked} alt="" />
          </div>
        </div>
        <div className="circle"></div>
      </div>
      </div>
    </>
  );
}

export default SocialHandle;
