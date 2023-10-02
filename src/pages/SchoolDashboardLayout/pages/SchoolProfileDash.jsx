// stylesheet
import "./style/SchoolProfileDash.css";

// images
import ProfileHero from "./images/ProfileHero.png";
import ProfilePicture from "./images/ProfilePicture.svg";

// components
import ProfileNav from "./components/ProfileNav";
import { Outlet } from "react-router-dom";

const SchoolProfileDash = () => {
  return (
    <div className="profile_dash">
      <div className="profile_dash_header">
        <h1>School Profile</h1>
      </div>
      <div className="profile_hero">
        <img src={ProfileHero} alt="Profile Hero" />
        <div className="profile_hero_info">
          <img src={ProfilePicture} alt="image" />
          <div className="profile_info_content">
            <h3>Timi Group School</h3>
            <p>Motto: We rise by lifting others </p>
          </div>
        </div>
      </div>
      <ProfileNav/>
      <Outlet/>
    </div>
  );
};

export default SchoolProfileDash;
