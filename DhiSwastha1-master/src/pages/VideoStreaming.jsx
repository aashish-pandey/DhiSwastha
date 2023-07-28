import React from "react"
import ReactPlayer from 'react-player/youtube'
import Navbar from "../components/Newsfeed/Navbar"
import "./VideoStreaming.css"

export default function VideoStreaming(){

    const videos = [
        {
        url: 'https://www.youtube.com/watch?v=t6Kw3n9CNrc&ab_channel=SandeepMaheshwari'
        },

        {
        url: 'https://www.youtube.com/watch?v=QjO02NuhthM'
        },

        {
        url: 'https://www.youtube.com/watch?v=RwxC5J8LI4Q'
        },

    ]

    return(
        <>
        <Navbar/>

        <div className="video"> 
   

        {videos.map(video=>   (
            

             
               
                
                <div className="
               row shadow ms-5 me-5 mt-4 mb-4 p-4" >
                            {/* video-desciption */}
                        <div className=" col-lg-5 ms-2 col-sm-10 col-md-10 ">
                            <div className="ms-5">
                                <div> <h1> How to stay motivated all the time  </h1> </div>
                                <div><p> desciption</p> </div>
                            </div>
                        
                         </div>

                        {/* video */}
                <div className="ms-auto col-lg-5 me-5  col-sm-10 col-md-10 " style={{ width: "40vw" }}> 
                                <div> <ReactPlayer url={video.url}
                                    config={
                                        {
                                            controls: true,
                                            light: true
                                        }
                                    }
                               />
                               </div>
                        
                         </div>

                   
                </div>
                 

          


        ))}

            </div>

           
        </>
    )
}