import { useState } from "react";
import { useNavigate } from "react-router-dom";
// stylesheet
import "./style/SignInModal.css";

// images
import Logo from "./images/SignIn.png";
import CancelIcon from "./images/cancel.svg";
import EmailIcon from "./images/email.svg";
import PasswordIcon from "./images/password.svg";
import Google from "./images/Google.svg";
import { NavLink } from "react-router-dom";

const SignInModal = ({ setOpenSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  // Sign in submission
  const handleSignIn = (e) => {
    e.preventDefault();
    if(email === "" || password === ""){
      setErrorMessage(true);
    }else{
      navigate("/search_page");
    }
  };
  return (
    <div className="sign_in_overlay">
      <div className="cancel">
        <img
          src={CancelIcon}
          alt="cancel"
          onClick={() => setOpenSignIn(false)}
        />
      </div>
      <div className="sign_in_container">
        <div className="sign_in_header">
          <img src={Logo} alt="Logo" />
          <p>Welcome Back!</p>
        </div>
        <form className="sign_in_form" onSubmit={handleSignIn}>
          <div className="inner_form">
            <img src={EmailIcon} alt="Email" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autocomplete="off"
              required
            />
          </div>
          <div className="inner_form">
            <img src={PasswordIcon} alt="Password" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autocomplete="off"
              required
            />
          </div>
          {errorMessage ? (
          <div className="error">Invalid Email or Password</div>
        ) : null}
          <button>Login</button>
        </form>
        <div className="or">
          <hr></hr>
          <span>or</span>
          <hr></hr>
        </div>
        <NavLink to="/register">
          <button className="google_login">
            <img src={Google} alt="Google" />
            <p>Register with Gmail</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SignInModal;
