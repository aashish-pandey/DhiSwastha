import React,{useContext} from 'react'

import { AuthContext } from '../../context/AuthContext'
// images 


import d5 from "../../img/d5.jpg"
const Banner = () => {

    const { currentUser } = useContext(AuthContext);
  return (
    <>
          <section className="container " id="headpart">
              <div className="container" style={{ textAlign: "center" }}>
                  <div className="back-img">
                      <img src={d5} style={{ width: "80%", height: "400px" }} />
                  </div>
                  <div className="front-img">
                      <img src={currentUser.photoURL} style={{ position: "relative", top: "-80px", borderRadius: "50%", height: "170px", width: "170px" }} />
                  </div>
                  <div className="d-flex  justify-content-center" style={{ position: "relative", top: "-50px" }} >
                      <div><h2> {currentUser.displayName} </h2> </div>
                      {/* <div> <button className="btn  btn-secondary ms-2">Edit </button></div> */}


                  </div>
                  {/* <div style={{ position: "relative", top: "-50px" }}>

                      <button className="btn btn-primary m-2 p-2 "> followers </button>
                      <button className="btn btn-primary m-2 p-2 "> following</button>

                  </div> */}


              </div>
          </section>
    </>
  )
}

export default Banner