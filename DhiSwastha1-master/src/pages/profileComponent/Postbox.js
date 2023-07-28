import React ,{useContext,useState} from 'react'
import { AuthContext } from '../../context/AuthContext'
import '../../components/Newsfeed/mainfeed/PostForm.css'



import { arrayUnion, updateDoc ,doc,setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const Postbox = () => {

    const { currentUser } = useContext(AuthContext);
    const [text,setText] = useState("");


// form handling function 

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
      // setErr(true);
      console.log("Something bad has happened: " + err);
    }
    // }
    window.location.reload(true);
  }

      return (
    <>
          <section className="container mb-5 rounded " id="post">


              <div className="container ms-auto me-auto shadow-lg bdr " style={{ textAlign: "center", maxWidth: "80%", width: "700px" }}>
            <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-start ">
            <div className=" m-2 "><img src={currentUser.photoURL} style={{ width: "45px", height: "45px", borderRadius: "50%" }} className=""  alt='...'/> </div>

                  <div>
                    <textarea type="text" id='tx'
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      className=' fs-5 m-2 p-1 ps-2' placeholder="      what's on your mind  ?  "
                    />

                  </div>
                      
                  </div>

                  <div className="d-flex justify-content-end  " id ='txbox'>
                      

                      <div className=" m-2"><button type='submit' className="btn btn-secondary" value= 'post'> Post </button> </div>
                  </div>
              </form>
              </div>
        


          </section>
    </>
  )
}

export default Postbox