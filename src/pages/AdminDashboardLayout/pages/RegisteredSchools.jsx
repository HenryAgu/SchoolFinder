// stylesheet
import "./style/RegisteredSchools.css";

// images
import SearchIcon from "../images/Search.svg";
import SchoolImage from "../images/SchoolImage.png";
import LocationIcon from "../images/Location.svg";
import Rate from "../images/Rate.svg";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisteredSchools = () => {
  const schoolsCard = [
    {
      SchoolImages: SchoolImage,
      SchoolName: "Glowfield School",
      SchoolLocation: "Calle Sin National Headquater",
      SchoolEmail: "email@gmail.com",
    },
    {
      SchoolImages: SchoolImage,
      SchoolName: "Glowfield School",
      SchoolLocation: "Calle Sin National Headquater",
      SchoolEmail: "email@gmail.com",
    },
    {
      SchoolImages: SchoolImage,
      SchoolName: "Glowfield School",
      SchoolLocation: "Calle Sin National Headquater",
      SchoolEmail: "email@gmail.com",
    },
    {
      SchoolImages: SchoolImage,
      SchoolName: "Glowfield School",
      SchoolLocation: "Calle Sin National Headquater",
      SchoolEmail: "email@gmail.com",
    },
    {
      SchoolImages: SchoolImage,
      SchoolName: "Glowfield School",
      SchoolLocation: "Calle Sin National Headquater",
      SchoolEmail: "email@gmail.com",
    },
    {
      SchoolImages: SchoolImage,
      SchoolName: "Glowfield School",
      SchoolLocation: "Calle Sin National Headquater",
      SchoolEmail: "email@gmail.com",
    },
    {
      SchoolImages: SchoolImage,
      SchoolName: "Glowfield School",
      SchoolLocation: "Calle Sin National Headquater",
      SchoolEmail: "email@gmail.com",
    },
    {
      SchoolImages: SchoolImage,
      SchoolName: "Glowfield School",
      SchoolLocation: "Calle Sin National Headquater",
      SchoolEmail: "email@gmail.com",
    },
  ];

  // delete school
  const handleDeleteSchool = () =>
    toast.error("School Deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div>
      <div className="profile_dash_header">
        <h1>Registered Schools</h1>
      </div>
      <div className="school_search">
        <img src={SearchIcon} alt="Search icon" />
        <input type="text" placeholder="search for school" />
      </div>
      <div className="registered_school_container">
        {schoolsCard.map((school) => (
          <div className="registered_school_card">
            <div className="left_registered">
              <img src={school.SchoolImages} alt="School_image" />
            </div>
            <div className="right_registered">
              <h3>{school.SchoolName}</h3>
              <div className="location">
                <img src={LocationIcon} alt="icon" />
                <p>{school.SchoolLocation}</p>
              </div>
              <img src={Rate} alt="icon" className="rate" />
              <div className="registered_school_buttons">
                <a href={`mailto:${school.SchoolEmail}`}>
                  <button className="message">Send Email</button>
                </a>
                <button className="delete" onClick={handleDeleteSchool}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisteredSchools;
