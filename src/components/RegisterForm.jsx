import React from 'react'
import "../assets/css/register-form.css"
import { useState } from 'react';
import { sendPostRequest } from '../services/PostService';
import userImg from "../assets/images/useravatar.png"
import { FaEdit,FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {RiContactsBookFill} from "react-icons/ri";
import {BsImage} from "react-icons/bs"
const RegisterForm = () => {
    const [registerUser, setRegisterUser] = useState({
        firstName: "",
        lastName: "",
        gender:"",
        age:"",
        contact: "",
        email: "",
        role:"",
      });

    const [responseData, setResponseData] = useState({
    data: undefined,
    error: undefined,
    loading: false,
    });

    const [selectedFile, setSelectedFile] = useState(null);

    console.log(JSON.stringify(registerUser));
    console.log(selectedFile);

      const checkInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegisterUser({ ...registerUser, [name]: value });
      };

    const handelSubmit = async (e) => {
        e.preventDefault();
        const formData=new FormData();
        formData.append("user", JSON.stringify(registerUser));
        formData.append("file", selectedFile);

        setResponseData({ data: undefined, error: undefined, loading: true });
        const { data, error, loading } = await sendPostRequest("api/admin/register",formData);
        setResponseData({ data: data, error: error, loading: loading });
     
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        console.log(data);
    };

    return (
    <div className="register-form-div">
         
        <h2 className="register-form-div__title">Add User Here!</h2>

        <form className="register-form" onSubmit={handelSubmit}>
         
        <div className="input-wrapper">
        <label className="input-lable" for="firstName">First Name<span className="required">*</span>:</label>
            <input
                type="text"
                className="register-form__first-name"
                name="firstName"
                value={registerUser.firstName}
                onChange={checkInput}
                placeholder="First Name*"
                required
                maxLength="50"
            />
        </div>
         
        <div className="input-wrapper">
        <label className="input-lable" for="lastName">Last Name<span className="required">*</span>:</label>
          <input
            type="text"
            className="register-form__last-name"
            name="lastName"
            value={registerUser.lastName}
            onChange={checkInput}
            placeholder="Last Name*"
            required
            maxLength="50"
          />
         </div>

        <div className="input-wrapper">
          <label className="input-lable" for="email">Email<span className="required">*</span>:</label>
          <input
            type="email"
            className="register-form__email"
            name="email"
            value={registerUser.email}
            onChange={checkInput}
            placeholder="Email*"
            required
            maxLength="50"
          />
        </div>

        <div className="input-wrapper">
        <label className="input-lable" for="contact">Contact<span className="required">*</span>:</label>
          <input
            type="number"
            className="register-form__contact"
            name="contact"
            value={registerUser.contact}
            onChange={checkInput}
            placeholder="Contact*"
            required
            min="9000000000" max="9999999999"
          />
        </div>

        <div className="input-wrapper">
        <label className="input-lable" for="age">Age<span className="required">*</span>:</label>
          <input
            type="number"
            className="register-form__age"
            name="age"
            value={registerUser.age}
            onChange={checkInput}
            placeholder="age*"
            required
          />
        </div>

        <div className="select-wrapper">
            <div className="input-wrapper">
            <label className="input-lable" for="gender">Gender<span className="required">*</span>:</label>
                <select name="gender" className="register-form__gender" onChange={checkInput} required>
                    <option value="">---select Gender---</option>
                    <option value="MALE" selected>Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                </select>
            </div>
            <div className="input-wrapper">
                <label className="input-lable" for="role">Role:<span className="required">*</span></label>
                <select name="role" className="register-form__role" onChange={checkInput} required>
                    <option value="">---select Role---</option>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                </select>
            </div>
        </div>
        <div className="input-wrapper">
            <label className="input-lable" for="file">Profile Image<span className="required">*</span>:</label>
            <input
            type="file"
            className="register-form__file"
            name="file"
            onChange={e=>setSelectedFile(e.target.files[0])}
            required
          />
        </div>
        <button className="register-form__btn" type="submit">Register</button>
        </form>
    </div>
    );
};
export default RegisterForm;
