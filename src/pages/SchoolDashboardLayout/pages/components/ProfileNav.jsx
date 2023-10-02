import "../style//ProfileNav.css";

// images
import RenameIcon from "../images/rename.svg";

// image
import map from "../images/Map.png";

const ProfileNav = () => {
  return (
    <div className="profile_nav">
      <h3>Contact</h3>
      <div className="settings_box">
        <div className="inner_settings">
          <label htmlFor="">School Website</label>
          <div className="form_box">
            <input type="url" placeholder="www.timigroupschool.com" />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Address</label>
          <div className="form_box">
            <input type="text" placeholder="Calle Sin National Headquater" />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
      </div>
      <div className="settings_box">
        <div className="inner_settings">
          <label htmlFor="">School Phone</label>
          <div className="form_box">
            <input type="tel" placeholder="+124 906 8149 238" />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Email</label>
          <div className="form_box">
            <input type="email" placeholder="SayhelloTimiSchool@gmail.com" />
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
              <input type="number" placeholder="Timi Group School" />
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
              <input type="text" placeholder="None" />
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
              <input type="date" />
              <img src={RenameIcon} alt="rename" />
            </div>
          </div>
          <div className="inner_settings">
            <label htmlFor="">Ending</label>
            <div className="form_box">
              <input type="date"/>
              <img src={RenameIcon} alt="rename" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
