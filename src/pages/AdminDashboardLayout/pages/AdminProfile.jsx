// stylesheet
import "./style/AdminProfile.css";

// images
import Avatar from "../images/Avatar.svg";
import LogoutIcon from "../images/Logout.svg";
import { NavLink } from "react-router-dom";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProfile = () => {
  // delete admin
  const deleteAdmin = () => {
    toast.error("Admin Deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  // delete admin
  const addAdmin = (e) => {
    e.preventDefault();
    toast.success('Admin Created Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const admins = [
    {
      image: Avatar,
      AdminName: "Azubuike Duru",
      AdminEmail: "Duruazubuike@gmail.com",
    },
    {
      image: Avatar,
      AdminName: "Azubuike Duru",
      AdminEmail: "Duruazubuike@gmail.com",
    },
  ];
  return (
    <div>
      <div className="profile_dash_header">
        <h1>Admin Profile</h1>
      </div>
      <div className="admin_profile">
        <div className="admins_list">
          <div className="admin_list_header">
            <img src={Avatar} alt="Avatar" />
            <h5>Sir Promise</h5>
            <p>SirPromise2019@admin.com</p>
          </div>
          <hr />
          {admins.map((admin) => (
            <div className="admin_info">
              <div className="admin_name">
                <img src={admin.image} alt="Avatar" />
                <div className="inner_admin_name">
                  <p>{admin.AdminName}</p>
                  <span>{admin.AdminEmail}</span>
                </div>
              </div>
              <button onClick={deleteAdmin}>Delete</button>
            </div>
          ))}
          <div className="log_out">
            <img src={LogoutIcon} alt="icon" />
            <h4>Log out</h4>
          </div>
        </div>
        <div className="add_admin">
          <div className="add_admin_header">
            <h4>Admin Account Setup</h4>
            <p>Admins have access to modify school settings</p>
          </div>
          <form action="" className="add_admin_form">
            <div className="inner_add_form">
                <label htmlFor="Email Address">Email Address</label>
                <input type="email" placeholder="HenryAgu@admin.com" />
            </div>
            <div className="inner_add_form">
                <label htmlFor="Access Password">Access Password</label>
                <input type="email" placeholder="HenryAgu1234" />
            </div>
            <button onClick={addAdmin}>Add Admin</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminProfile;
