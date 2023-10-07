import React, { useState,useEffect } from "react";

import "../style//ProfileNav.css";

// images
import RenameIcon from "../images/rename.svg";

// image
import map from "../images/Map.png";

const ProfileNav = () => {
  // contact
  const [schoolWebsite, setSchoolWebsite] = useState("www.timigroupschool.com");
  const [schoolAddress, setSchoolAddress] = useState("Calle Sin National Headquater");
  const [schoolPhone, setSchoolPhone] = useState("+124 906 8149 238");
  const [schoolEmail, setSchoolEmail] = useState("SayhelloTimiSchool@gmail.com");

  // Fees
  const [schoolFees, setSchoolFees] = useState("30000");
  const [formatted, setFormattedNumber] = useState('')
  useEffect(() => {
    // Use toLocaleString to format the number
    const formatted = schoolFees.toLocaleString();
    setFormattedNumber(formatted);
  }, [schoolFees]);
  const [scholarship, setScholarship] = useState("None");

  // Admission
  const [startingDate, setStartingDate] = useState('2023-09-29');
  const [endingDate, setEndingDate] = useState('2023-09-29');

  return (
    <div className="profile_nav">
      <h3 className="profile_contact">Contact</h3>
      <div className="settings_box">
        <div className="inner_settings">
          <label htmlFor="">School Website</label>
          <div className="form_box">
            <input type="url" value={schoolWebsite} onChange={(e)=> setSchoolWebsite(e.target.value)} />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Address</label>
          <div className="form_box">
            <input type="text" value={schoolAddress} onChange={(e)=> setSchoolAddress(e.target.value)} />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
      </div>
      <div className="settings_box">
        <div className="inner_settings">
          <label htmlFor="">School Phone</label>
          <div className="form_box">
            <input type="tel" value={schoolPhone} onChange={(e)=> setSchoolPhone(e.target.value)}/>
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Email</label>
          <div className="form_box">
            <input type="email" value={schoolEmail} onChange={(e)=> setSchoolEmail(e.target.value)}/>
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
      </div>
      <div className="school_map">
        <h3>School Map</h3>
        <img src={map} alt="map" />
      </div>
      <div className="fees">
        <h3>Fees</h3>
        <div className="settings_box">
          <div className="inner_settings">
            <label htmlFor="">Tuition Fee(Annual)</label>
            <div className="form_box">
              <input type="number" value={formatted} onChange={(e)=> setSchoolFees(e.target.value)}/>
              <img src={RenameIcon} alt="rename" />
            </div>
          </div>
          <div className="inner_settings">
            <label htmlFor="">Payment Option</label>
            <select name="type">
              <option value="private">Bank Teller</option>
              <option value="public">Public</option>
            </select>
          </div>
        </div>
        <div className="settings_box">
          <div className="inner_settings">
            <label htmlFor="">Schoolarship</label>
            <div className="form_box">
              <input type="text" value={scholarship} onChange={(e)=> setScholarship(e.target.value)} />
              <img src={RenameIcon} alt="rename" />
            </div>
          </div>
        </div>
      </div>
      <div className="admission">
        <h3>Admission</h3>
        <div className="settings_box">
          <div className="inner_settings">
            <label htmlFor="">Starting</label>
            <div className="form_box">
              <input type="date" value={startingDate} onChange={(e)=> setStartingDate(e.target.value)}/>
              <img src={RenameIcon} alt="rename" />
            </div>
          </div>
          <div className="inner_settings">
            <label htmlFor="">Ending</label>
            <div className="form_box">
              <input type="date" value={endingDate} onChange={(e)=> setEndingDate(e.target.value)}/>
              <img src={RenameIcon} alt="rename" />
            </div>
          </div>
        </div>
      </div>
      <div className="update_button">
        <button>Update</button>
      </div>
    </div>
  );
};

export default ProfileNav;
