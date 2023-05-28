import React from "react";
import Logo from "./Logo.png";
import { NavLink } from "react-router-dom";
import "./Land.css";
import Footer from "../Pages/Footer.jsx";

const Land=()=>{
    return (
        <div className="m-out">
          <div className="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light bh-light">
                <div className="container-fluid">
                <img src={Logo} alt="React" className="logo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-icon">
                    <li className="nav-item"><NavLink className="Navlink" to="/home"><h6 className="menu_item">Home</h6></NavLink></li>
            <li className="nav-item navlistcustom"><NavLink className="Navlink" to="/about"><h6 className="menu_item">About US</h6></NavLink></li>
            <li className="nav-item "><NavLink className="Navlink" to="/service"><h6 className="menu_item">Services</h6></NavLink></li>
            <li className="nav-item "><NavLink className="Navlink" to="/contact"><h6 className="menu_item">Contact US</h6></NavLink></li> 
            <li className="nav-item "><NavLink className="Navlink" to="/help"><h6 className="menu_item">Help</h6></NavLink></li>
            <li className="nav-item "><button type="button" className="btn btn-light">Sign In</button></li>
            <li className="nav-item "><button type="button" className="btn btn-dark">Register</button></li>
                    </ul>
                </div>
                </div>

            </nav>
            </div> 

             <div className="hero-container" id="hero-sec">
             <div className="container-fluid ">
             <div className="row d-flex">
             <div className="col align-middle">
             <div className="px-2 py-2">
             <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=900&t=st=1667037491~exp=1667038091~hmac=7c71ea8afc8f3cc8065c5ccc05d105e3c8a7b76f0133016cb210a7882dc19611" className="img-fluid" alt="..."/>  
             </div>  
             </div>
             <div className="col">
             <div className="px-5 py-5 mt-5">
             <div className="px-2 py-2 align-middle">
             <h4>Get all your needs Here</h4>
             <p> An Online Technical Prepration Platform which helps you to prepare for technical rounds of interview which will help you to crack big tech giants. </p> 
             <ul className="sign-ul">
                <li><button type="button" className="btn btn-light">Sign In</button></li>
                <li><button type="button" className="btn btn-dark">Register</button></li></ul>
             </div>  
             </div>
             </div>
             </div>
             </div>
             </div>
             <Footer/>
        </div>
    )
}

export default Land;


