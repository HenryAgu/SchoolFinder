import { useState,useContext } from "react";

// stylesheet
import "./style/Register.css";

import { SignInContext } from "../../Contexts/SignInContext";

// components
import SignInModal from "../../components/Navbar/SignInModal";

// images
import Ecllipse from "./images/ecllipse.png";
import Logo from "../../components/Navbar/images/Logo.svg";
import School from "./images/school.svg";
import Gmail from "./images/gmail.svg";
import Phone from "./images/phone.svg";
import Password from "./images/password.svg";
import Website from "./images/website.svg";
import { NavLink } from "react-router-dom";

const Register = () => {
  const { openSignIn, setOpenSignIn } = useContext(SignInContext);
  return (
    <main className="register">
      <div className="register_container">
        <img src={Ecllipse} alt="Ecllipse" className="ecllipse" />
        <div className="register_header">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <h1>Register your school</h1>
        </div>
        <form className="register_form">
          <div className="inner_form">
            <div className="input_content">
              <img src={School} alt="school" />
              <input type="text" placeholder="School Name" required />
            </div>
            <div className="input_content">
              <input type="text" placeholder="I’m the School.." required />
            </div>
          </div>
          <div className="inner_form">
            <div className="input_content">
              <img src={Gmail} alt="Gmail" />
              <input type="email" placeholder="Gmail" required />
            </div>
            <div className="input_content">
              <img src={Phone} alt="Phone" />
              <input type="text" placeholder="Phone Number" required />
            </div>
          </div>
          <div className="inner_form">
            <div className="input_content">
              <img src={Password} alt="Password" />
              <input type="password" placeholder="Create Password" required />
            </div>
            <div className="input_content">
              <img src={Password} alt="Password" />
              <input type="password" placeholder="Confirm Password" required />
            </div>
          </div>
          <div className="school_website">
            <img src={Website} alt="image" />
            <input type="text" placeholder="School Website" required />
          </div>
          <div className="upload_cert">
            <input type="file" name="" id="" required />
            <p>
              <span>Uplaod </span>School Registration Certification/License Doc
            </p>
          </div>
          <button>Create School Account</button>
        </form>
        <p className="login_route">
          Already have an account on SchoolLocator?{" "}
          <span
            onClick={() => {
              setOpenSignIn(true);
            }}
          >
            Login
          </span>
        </p>
      </div>
      {openSignIn && <SignInModal setOpenSignIn={setOpenSignIn} />}
    </main>
  );
};

export default Register;
