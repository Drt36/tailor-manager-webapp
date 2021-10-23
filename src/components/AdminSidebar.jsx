import React from "react";
import "../assets/css/sidebar.css";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";
import img from "../assets/images/useravatar.png";

const AdminSidebar = (props) => {
  const email = "ss";
  return (
    <div className="sidebar-wrapper">
      <input type="checkbox" id="check" />
      <label className="label" for="check">
        <FaIcons.FaBars id="btn" />
        <FaIcons.FaTimes id="cancel" />
      </label>

      <div className="sidebar">
        <div className="sidebarprofile">
          <img className="sidebarprofilepic" src={img} />
          <h3 className="sidebarfullname">Dharma Raj Thanait</h3>
        </div>

        <NavLink
          to={"/admin/dashboard/" + email}
          activeClassName="active"
          className="sidebar__link"
        >
          <FaIcons.FaColumns />
          <span className="sidebar__title">Dashboard</span>
        </NavLink>

        <NavLink
          to={"/admin/users"}
          activeClassName="active"
          className="sidebar__link"
        >
          <FaIcons.FaUsers />
          <span className="sidebar__title">Users</span>
        </NavLink>

        <NavLink
          to={"/admin/report"}
          activeClassName="active"
          className="sidebar__link"
        >
          <FaIcons.FaBook />
          <span className="sidebar__title">Report</span>
        </NavLink>

        <NavLink
          to={"/admin/editprofile" + email}
          activeClassName="active"
          className="sidebar__link"
        >
          <FaIcons.FaUserEdit />
          <span className="sidebar__title">Edit Profile</span>
        </NavLink>

        <NavLink
          to={"/admin/changepassword" + email}
          activeClassName="active"
          className="sidebar__link"
        >
          <FaIcons.FaKey />
          <span className="sidebar__title">Change Password</span>
        </NavLink>

        <NavLink
          to={"/logout"}
          activeClassName="active"
          className="sidebar__link"
        >
          <FaIcons.FaSignOutAlt />
          <span className="sidebar__title">Log Out</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
