import { useState } from "react";

// stylesheet
import "../style/SearchDetail.css";

// images
import CancelIcon from "../images/Cancel.svg";
import RightArrow from "../images/RightArrow.svg";
import SchoolImage from "../images/SchoolPhoto.png";
import LikeIcon from "../images/Like.svg";
import UnlikeIcon from "../images/Unlike.svg";
import Rate from "../images/Rate.svg";
import Location from "../images/Location.svg";
import Price from "../images/Price.svg";

const SearchDetail = () => {
  const [nursery, setNursery] = useState(false);
  const levels = [
    {
      id: 1,
      level: "Nursery",
    },
    {
      id: 2,
      level: "Primary",
    },
    {
      id: 3,
      level: "Secondary",
    },
  ];
  const SchoolsDetail = [
    {
      id: 1,
      SchoolName: "Glowfield School",
      SchoolImage: SchoolImage,
      Price: 200,
      Location: "Calle Sin National Headquater",
      SchoolType: "Private",
    },
    {
      id: 2,
      SchoolName: "Glowfield School",
      SchoolImage: SchoolImage,
      Price: 200,
      Location: "Calle Sin National Headquater",
      SchoolType: "Private",
    },
    {
      id: 3,
      SchoolName: "Glowfield School",
      SchoolImage: SchoolImage,
      Price: 200,
      Location: "Calle Sin National Headquater",
      SchoolType: "Private",
    },
  ];
  return (
    <div className="search_detail">
      <div className="filter">
        <h1>Filter</h1>
        <div className="class_level">
          <h3>By Class Level</h3>
          <div className="level_options">
            {levels.map((level) => (
              <div className="direct_levels" key={level.id}>
                <p>{level.level}</p>
                <img src={CancelIcon} alt="cancel" />
              </div>
            ))}
          </div>
        </div>
        <div className="school_type">
          <div className="left_school_type">
            <h5>School Type</h5>
            <p>All types</p>
          </div>
          <div className="right_school_type">
            <img src={RightArrow} alt="Right Arrow" />
          </div>
        </div>
        <div className="price">
          <h5>Price, N</h5>
          <div className="min_max">
            <input type="text" placeholder="Min" />
            <p>-</p>
            <input type="text" placeholder="Max" />
          </div>
          <div className="price_range">
            <div className="inner_range">
              <input type="checkbox" name="" id="" />
              <span>Under 50k</span>
            </div>
            <div className="inner_range">
              <input type="checkbox" name="" id="" />
              <span>50k - 100k</span>
            </div>
            <div className="inner_range">
              <input type="checkbox" name="" id="" />
              <span>100k - 200k</span>
            </div>
          </div>
        </div>
        <button>Apply Filter</button>
      </div>
      <div className="school_list">
        <div className="school_list_header">
          <h1>Schools in Choba, Nigeria</h1>
          <div className="list_header_info">
            <p>29 Physical schools</p>
            <p>10 Online schools</p>
          </div>
        </div>
        <div className="school_list_container">
          {SchoolsDetail.map((school) => (
            <div className="school_card" key={school.id}>
              <div className="left_school_card">
                <img src={school.SchoolImage} alt="SchoolImage" />
              </div>
              <div className="right_school_card">
                <div className="school_card_top">
                  <h4>{school.SchoolName}</h4>
                  <img src={LikeIcon} alt="icon" />
                </div>
                <div className="inner_school_info">
                  <img src={Price} alt="Price" />
                  <span>N{school.Price}K</span>
                </div>
                <div className="inner_school_info">
                  <img src={Location} alt="location" />
                  <p>{school.Location}</p>
                </div>
                <img src={Rate} alt="rate" />
                <div className="school_card_bottom">
                  <div className="left_card_bottom">
                    <div className="rate_fig">4.2</div>
                    <p>{school.SchoolType} School</p>
                  </div>
                  <button>Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="map">
        
      </div>
    </div>
  );
};

export default SearchDetail;
