import React, { useState } from "react";

import "./style/SchoolSetting.css";

// images
import RenameIcon from "./images/rename.svg";
import { Switch } from "antd";

const SchoolSettings = () => {
  const [schoolName, setSchoolName] = useState("Timi Group School");
  const [schoolMotto, setSchoolMotto] = useState("We rise by lifting others");
  return (
    <div className="school_settings">
      <div className="profile_dash_header">
        <h1>Settings</h1>
      </div>
      <div className="settings_text">
        <h4>School Basic Information</h4>
        <p>Guide school finders on what to see</p>
      </div>
      <div className="settings_form">
        <div className="school_visibility">
          <h4>School Visibility</h4>
          <Switch/>
        </div>
      <div className="inner_settings">
          <label htmlFor="">School Profile Image</label>
          <div className="form_box">
            <input
              type="file"
            />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Display Image</label>
          <div className="form_box">
            <input
              type="file"
            />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Type</label>
          <select name="type">
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Name</label>
          <div className="form_box">
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Motto</label>
          <div className="form_box">
            <input
              type="text"
              value={schoolMotto}
              onChange={(e) => setSchoolMotto(e.target.value)}
            />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="update_button">
          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default SchoolSettings;
