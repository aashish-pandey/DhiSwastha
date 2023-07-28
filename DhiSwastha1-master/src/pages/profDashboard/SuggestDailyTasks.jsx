import React from "react"
import Navbar from "../../components/Newsfeed/Navbar";
import Sdtaskform from "./Sdtaskform";
import dt from "../../img/dt.jpg"
import { width } from "@mui/system";


export default function SuggestDailyTasks(){


    const imgStyle = {
     
        height:"40vh",
        width:"30vw"
        
    }
    const divstyle ={
      
    
       height:"80vh",
       width:"70%"
  
    }

    return(
        <>
        
        <Navbar />
            <div className="row" >
                <div className=" col-lg-6 col-md-6" >
                    <div style={divstyle} className=" m-2 ms-auto me-auto  shadow-lg ">
                        <Sdtaskform  />

                     </div>
                   
                </div>
                <div className="col-lg-6 col-md-5  ">
                        <div className="m-4  ">
                                <img src={dt} style={imgStyle} className=" " />
                        </div>
                 </div>
       </div>

       
               
        </>
    )
}