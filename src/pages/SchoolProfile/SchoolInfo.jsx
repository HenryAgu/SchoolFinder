import "./style/SchoolInfo.css";
import { NavLink } from "react-router-dom";

// components
import SchoolLogo from "./images/SchoolLogo.svg";
import SchoolHero from "./images/SchoolHero.png";
import PriceTag from "./images/price.svg";
import Like from "./images/like.svg";
import Reviewer from "./images/reviewer.svg";
import Rate from "./images/rate.svg";
import map from "./images/map.png";

const SchoolInfo = () => {
  return (
    <div className="school_info">
      <div className="left_school_info">
        <div className="school_name_header">
          <img src={SchoolLogo} alt="Logo" />
          <div className="school_name">
            <h1>Timi Group School</h1>
            <p>Private School</p>
          </div>
        </div>
        <div className="school_hero">
          <img src={SchoolHero} alt="hero image" />
        </div>
        <div className="school_price">
          <div className="left_school_price">
            <div className="inner_price_tag">
              <img src={PriceTag} alt="price tag" />
              <h1>500K</h1>
            </div>
            <div className="inner_location">
              <p> Calle Sin National Headquater</p>
            </div>
          </div>
          <div className="right_school_price">
            <div className="rate_fig">4.2</div>
          </div>
        </div>
        <div className="school-inside_details">
          <div className="left_inside_details">
            <div className="inside_details">
              <a href="www.timigroupschool.com" className="detail_link">www.timigroupschool.com</a>
              <div className="detail_name">
                <p>SCHOOL WEBSITE</p>
              </div>
            </div>
            <div className="inside_details">
              <a href="mailto:Hello@timigroupschool.com" className="detail_link">Hello@timigroupschool.com</a>
              <div className="detail_name">
                <p>EMAIL</p>
              </div>
            </div>
          </div>
          <div className="right_inside_details">
            <div className="inside_r">
              <p>+234 9068 149238</p>
              <div className="detail_name">
                <p>TELEPHONE</p>
              </div>
            </div>
            <div className="inside_r">
              <p>27th September, 2024.</p>
              <div className="detail_name">
                <p>ENTRANCE DATE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="review">
          <h3>25 Verified Reviews</h3>
          <div className="reviewer_detail">
            <img src={Reviewer} alt="Reviewer" />
            <div className="reviewer_name">
              <p>Sir Promise</p>
              <img src={Rate} alt="Rate" />
            </div>
          </div>
          <p>
            This school is undeniably impressive, although it comes with a hefty
            price tag. I successfully passed their entrance exam last year and
            received admission just a month later. Since then, their academic
            curriculum has consistently exceeded my expectations. I
            wholeheartedly rate them 5 stars, and that's only because there
            isn't a higher rating available! 😂🌟
          </p>
          <div className="message_box">
            <textarea placeholder="Write a review"></textarea>
            <button>Post</button>
          </div>
        </div>
      </div>
      <div className="right_school_info">
        <img src={map} alt="map" />
      </div>
    </div>
  );
};

export default SchoolInfo;
