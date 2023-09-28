import { useState } from "react";

// stylesheet
import "../style/SearchDetail.css";

// images
import CancelIcon from "../images/Cancel.svg";
import RightArrow from "../images/RightArrow.svg";

const SearchDetail = () => {
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
      </div>
      <div className="school_list">2</div>
      <div className="map">3</div>
    </div>
  );
};

export default SearchDetail;
