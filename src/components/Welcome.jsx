import React from 'react'
import "../assets/css/welcome.css"
import indeximgae from "../assets/images/indeximage.png"
const Welcome = () => {
    return (
        <div className="welcome-div">
            <h1 className="welcome-div__title">Tailor Manager</h1>
            <h3 className="welcome-div__desc">Tailor management system will overcome the problems 
            seen in  the tailoring business.The daily tasks of the tailoring  
            business are automated by this system.This will be especially beneficial
            for shirting suiting tailors, but any other tailor shops can also use it.
            </h3>
            <img className="welcome-div__img" src={indeximgae} alt="Index"/>
        </div>
    )
}

export default Welcome
