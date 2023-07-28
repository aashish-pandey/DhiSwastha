import React, { useState } from 'react'
import "./cmt.css"

const ContactUs = () => {

    const [isActive , setActive] = useState(false);
    const handleActive = ()=>{
        setActive(current=>!current)

    }
   
  return (
    <>
          <div className='profbox'>
              <div className='profContainer ' style={{ border: isActive?"1px solid black":""}}>
                <div className='d-flex justify-content-center'>
                    <div className='profEle'>
                          <button className='btn btn-secondary m-3 p-2' onClick={handleActive}> Apply to be professional </button> 
                    </div>
                    
                </div>
                
                <div> 
               {isActive &&  <div>
                    <div className='d-flex justify-content-center'> 
                              <div><h3> Join us as Professional </h3> </div>
                    
                     </div>
                          <div className='d-flex justify-content-center'>
                              <div> <h5>Submit your Details at Dhiswastha@gmail.com </h5></div>
                        
                      </div>

                    {/* <div>
                        <form>
                            <div className='elements'>
                            <div className='ele1'>
                                <input type='text' placeholder =' Enter your Contact Number or email ' style={{width:"80%" ,borderRadius:"25px"}} className='m-1 p-1 ms-4'/>
                            </div>
                             <div className='ele1'>
                                      <input type='text' placeholder=' Your Profession 
                                      
                                      ' style={{ width: "80%", borderRadius: "25px" }} className='m-1 p-1 ms-4'/>
                            </div>
                             <div className=''>
                                          <textarea placeholder=' describe your self ' style={{ width: "80%", borderRadius: "25px" }} className='m-1 p-1 ms-4' >

                                    </textarea>
                            </div>
                            <div>
                                <div className='d-flex justify-content-center m-2 p-2'>
                                              <button className='btn btn-secondary'>send Request  </button>
                                </div>
                              
                            </div>

                            </div>
                        </form>
                    </div> */}
                </div>
               }
                  </div>

            </div>
        </div>
    </>
  )
}

export default ContactUs