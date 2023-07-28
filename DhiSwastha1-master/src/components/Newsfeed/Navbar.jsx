import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import "./Nav.css"

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";




export default function Navbar() {
 
const { currentUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut(auth);

  }


  return (
    <>
      <nav className=" navcls shadow">
          <div className="m-2 p-1">
              <div>
                <h2 style={{fontFamily:"cursive"}}> DhiSwastha </h2>
              </div>
          </div>

          <div className="centerElements">
              <div className=" centerEle  centerEleFirst">
            <NavLink to="/" className='elementLink'> <i class="fa-sharp fa-solid fa-house-user fa-3x fa "></i></NavLink>
              </div>
          <div className=" centerEle  centerEleSecond">
            <NavLink to="/Home" className=' elementLink'><i class="fa-regular fa-message fa-3x fa"></i></NavLink>
              </div>
          <div className=" centerEle  centerEleThird">
            <NavLink to="/Dailytask" className='elementLink'><i class="fa-regular fa-calendar-days fa-3x fa"></i>  </NavLink>
              </div>

          <div className=" centerEle  centerEleFourth">
            <NavLink to="/VideoStreaming" className='elementLink'><i class="fa-solid fa-video fa-3x fa"></i>  </NavLink>
          </div>
              
          </div>


        <div className="profile ms-auto m-2 p-2  me-5">
                <h4> Profile </h4>
              <div className="profileContent">
            <div className="profileContentdiv"> <NavLink to="/Profile" className="profileContentElement fs-4"> {currentUser.displayName}</NavLink></div>
            <hr></hr>
            <div className="profileContentdiv">   <NavLink className="profileContentElement fs-4" onClick={handleSignOut}> Logout </NavLink> </div>

              </div>

          </div>

      </nav>
    </>
  )
}
