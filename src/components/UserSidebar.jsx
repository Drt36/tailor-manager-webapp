import React from "react";
import "../assets/css/sidebar.css";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";
import img from "../assets/images/useravatar.png";
const UserSidebar = () => {
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
            to={"/user/dashboard/" + email}
            activeClassName="active"
            className="sidebar__link"
          >
            <FaIcons.FaColumns />
            <span className="sidebar__title">Dashboard</span>
          </NavLink>

          <NavLink
            to={"/user/customers"}
            activeClassName="active"
            className="sidebar__link"
          >
            <FaIcons.FaUsers />
            <span className="sidebar__title">Customers</span>
          </NavLink>

          <NavLink
            to={"/user/staffs"}
            activeClassName="active"
            className="sidebar__link"
          >
            <FaIcons.FaUsers />
            <span className="sidebar__title">Staffs</span>
          </NavLink>

          <NavLink
            to={"/user/products"}
            activeClassName="active"
            className="sidebar__link"
          >
            <FaIcons.FaTshirt />
            <span className="sidebar__title">Products</span>
          </NavLink>

          <NavLink
            to={"/user/orders"}
            activeClassName="active"
            className="sidebar__link"
          >
            <FaIcons.FaShoppingCart/>
            <span className="sidebar__title">Orders</span>
          </NavLink>

          <NavLink
            to={"/user/bills"}
            activeClassName="active"
            className="sidebar__link"
          >
            <FaIcons.FaFileInvoice/>
            <span className="sidebar__title">Invoice</span>
          </NavLink>

          <NavLink
            to={"/user/expenses"}
            activeClassName="active"
            className="sidebar__link"
          >
            <FaIcons.FaMoneyCheckAlt/>
            <span className="sidebar__title">Expenses</span>
          </NavLink>

          <NavLink
            to={"/user/editprofile" + email}
            activeClassName="active"
            className="sidebar__link"
          >
            <FaIcons.FaUserEdit />
            <span className="sidebar__title">Edit Profile</span>
          </NavLink>

          <NavLink
            to={"/user/changepassword" + email}
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

export default UserSidebar;
