import React, { useState, useContext } from 'react'
import './PostForm.css'
import { AuthContext } from "../../../context/AuthContext";
import { arrayUnion, doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { width } from '@mui/system';

export default function PostForm() {

  const [text, setText] = useState("");
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(currentUser);

    const uid = currentUser.uid;
    const displayName = currentUser.displayName;
    const photoURL = currentUser.photoURL;
    const story = text;
    const likeCount = 0;
    setText("");

    const date = new Date().getTime();
    const pid = date.toString() + uid;


    try {

      // await deleteDoc(doc(db, "posts", "1665732905998"));

      // await updateDoc(doc(db, "posts", "1665733422381S3gcii7WtBM5Uzqco46r6AHMKsd2"), {
      //   likeCount: 100
      // })

      await setDoc(doc(db, "posts", pid), {

        uid,
        displayName,
        story,
        photoURL,
        likeCount,
        pid,
        date
      })




      // console.log("res id: " + res.id);
      // }catch(err){
      //   try{
      //     const res = await setDoc(doc(db, "post", uid), {


      //       messages: arrayUnion({
      //         uid,
      //         displayName,
      //         story,
      //         photoURL,
      //         likeCount,
      //         date
      //       })
      //     });

      //     console.log(res.id + ": res id");

    } catch (err) {
      setErr(true);
      console.log("Something bad has happened: " + err);
    }
    // }
    window.location.reload(true);
  }




  return (
    <div className='container mt-4 p-2 shadow-lg  bdr' id='postbox' >


      <form onSubmit={handleSubmit} >

        <div className='d-flex justify-content-start ' >
          <div> <img src={currentUser.photoURL} style={{ width: "45px", height: "45px", borderRadius: "50%" }} /> </div>
          <div>
            <textarea type="text" id='tx'
              onChange={(e) => setText(e.target.value)}
              value={text}
              className='p-2 fs-5 ms-3'
              placeholder=" what's  on your mind ?  "
            />

          </div>

        </div>
        <div className='d-flex  justify-content-end' >

          <div className='me-4'>
            <input type="submit" value="post" className=' btn btn-secondary ' />
          </div>


        </div>



      </form>

    </div>
  )
}