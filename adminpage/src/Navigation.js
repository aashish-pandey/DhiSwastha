import React from 'react'
import {Link} from "react-router-dom";
import "./Navigation.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Navigation() {
  const handleSignOut = () => {
    signOut(auth);

  }
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand ms-4" to='/' style={{"fontFamily":'cursive',"fontWeight":"bolder"}}>DhiSwastha</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <div className='mystyle me-4'>

        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit" onClick={handleSignOut} >Logout</button>
      </div>
    </form>
    
  </div>
</nav>

        
    
    </>
  )
}

export default Navigation