import React from "react";

// stylesheet
import "./style/Register.css";

// images
import Ecllipse from "./images/ecllipse.png";
import Logo from "../../components/Navbar/images/Logo.svg";
import School from "./images/school.svg";
import Gmail from "./images/gmail.svg";
import Phone from "./images/phone.svg";
import Password from "./images/password.svg";
import Website from "./images/website.svg";

const Register = () => {
  return (
    <section className="register">
      <div className="register_container">
        <img src={Ecllipse} alt="Ecllipse" className="ecllipse"/>
        <div className="register_header">
          <img src={Logo} alt="Logo" />
          <h1>Register your school</h1>
        </div>
        <form className="register_form">
          <div className="inner_form">
            <div className="input_content">
              <img src={School} alt="school" />
              <input type="text" placeholder="School Name" />
            </div>
            <div className="input_content">
              <input type="text" placeholder="I’m the School.." />
            </div>
          </div>
          <div className="inner_form">
            <div className="input_content">
              <img src={Gmail} alt="Gmail" />
              <input type="email" placeholder="Gmail" />
            </div>
            <div className="input_content">
              <img src={Phone} alt="Phone" />
              <input type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className="inner_form">
            <div className="input_content">
              <img src={Password} alt="Password" />
              <input type="password" placeholder="Create Password" />
            </div>
            <div className="input_content">
              <img src={Password} alt="Password" />
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="school_website">
            <img src={Website} alt="image" />
            <input type="text" placeholder="School Website" />
          </div>
          <div className="upload_cert">
            <input type="file" name="" id="" />
            <p><span>Uplaod </span>School Registration Certification/License Doc</p>
          </div>
          <button>Create School Account</button>
        </form>
        <p className="login_route">Already have an account on SchoolLocator? <span>Login</span></p>
      </div>
    </section>
  );
};

export default Register;
