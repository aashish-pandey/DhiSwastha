import { borderRadius } from '@mui/system';
import React ,{useState} from 'react'
import d3 from "../images/d3.png"
import "./cmt.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase'



const Post1 = (props) => {


  
  return (
      <section className=" container p-4 mb-5  rounded" id="post">
          <div className="container shadow-lg  pb-4" style={{ maxWidth: "80%", width: "700px" }}>
              {/* name ans image  */}
              <div class=" d-flex  mb-2 p-2">
                  <div class="im">  <img src={props.info.photoURL} height="55px" width="55px" alt='this is an image ' />   </div>
                  <div class="fs-3 "> @ {props.info.displayName} </div>
              </div>

              {/* story or post  */}
              <div >
                  <div className="m-1 p-2">
                      <p> {props.info.story}</p>
                  </div>
              </div>

              {/* separator */}

              <div>
                    <div>
                        <hr></hr>
                    </div>
                  <div className="d-flex  justify-content-center">
                      <button className='btn btn-danger m-2 p-2' style={{width :"20%"}}
                          onClick={async () => { await deleteDoc(doc(db, "posts", props.info.pid)); window.location.reload(true);}}
                      > Delete </button>
                  </div>

              </div>

              {/* like and comment  */}
              {/* <div class="d-flex  justify-content-center">
                  <div >
                      <div><button className="btn  fs-5"> likes</button> </div>
                  </div>
                  <div >
                      <div> <button className="btn  fs-5" onClick={handleClick}> Comment </button>

                      </div>
                  </div>
              </div>

              {/* {isShown && (<div className='container m-2 p-3  ' id='comment' style={{ width: "100%" }}>
                <div > 
                  <form action='post' className=''>
                      <div className='d-flex justify-content-start'>
                          <div className='txareabox'>
                              <textarea type="text" 
                                  // onChange={(e) => setText(e.target.value)}
                                  // value={text}
                                  className='fs-4 txarea'
                              />

                          </div>
                          <div> <button className='btn btn-secondary ms-2 mt-1 p-2'>Post  </button></div>
                        

                      </div>

                  </form>
                  </div>


              </div>) */}


              




          </div>
      </section>
  )
}

export default Post1