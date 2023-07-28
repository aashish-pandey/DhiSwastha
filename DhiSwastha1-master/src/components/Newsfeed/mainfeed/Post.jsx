import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from "../../../firebase";
import React from 'react'
import './Post.css'

export default function Post(props) {

  let cnt = props.info.likeCount;
  // const handleLike = async()=>{
  //       console.log('clicked');
  //       const uid = props.info.uid;
  //       const displayName = props.info.displayName;
  //       const photoURL = props.info.photoURL;
  //       const story = props.info.story;
  //       const likeCount = props.info.likeCount+1;
  //   try{

  //     await updateDoc(doc(db, "post", props.info.uid),{

  //       messages: arrayUnion({
  //         uid,
  //         displayName,
  //         story,
  //         photoURL,
  //         likeCount
  //       })
  //     });


  //   }catch(err){
  //     console.log('Error in post like count : ', + err);
  //   }
  // }
  return (
    <div className="containerPf" style={{width:"70%",minWidth:"500px"}}>


          <div className="headbox">
            <div className="im">  <img src ={props.info.photoURL} height="65px" width ="65px" alt ='this is an image ' />   </div>
             <div className="name"> {props.info.displayName} </div>
         
        </div>

        <div className="bodytext">
            <div className="text">
                <p> {props.info.story}</p>
            </div>
        </div>

        {/* <div className="footer">
             <div className="like"> {cnt} <span>Likes </span></div>
             <div className="comment">comment </div>
        </div> */}
          </div>
  )
}
