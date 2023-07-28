import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { db, storage } from "../../firebase";

const Sdtaskform = () => {

    const { currentUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const title = e.target[0].value;
        const details = e.target[1].value;
        const file = e.target[2].files[0];
        const name = currentUser.displayName;
        const duration = e.target[3].value;

        // alert(name);


        try {

            const date = new Date().getTime();
            const storageRef = ref(storage, `${title + name + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        await setDoc(doc(db, "SuggestDailyTasks", `${currentUser.uid + title + date}`), {
                            title,
                            details,
                            tasksImg: downloadURL,
                            professionalName: name,
                            duration,
                            uid: currentUser.uid,
                            taskUid: currentUser.uid + title + date
                        })
                    } catch (err) {
                        console.log("Error in suggest daily task adding: " + err);
                    }
                })
            })


        } catch (err) {
            console.log("Error in suggestDailyTasks: " + err);
        }

    }

    const bdr ={
        borderRadius:"20px",
        fontSize:"18px",
        width:"80%",
        marginLeft:"25px",
        height:"40px"
    }
    const txarea ={
        borderRadius: "25px",
        fontSize: "18px",
        width: "80%",
        marginLeft: "25px",
        height:"120px"

    }


  return (
  <>


    <div>
        <div className="m-2 p-2 d-flex justify-content-center">  <div className=""> <h3> Suggest Some Daily tasks </h3> </div></div>

            <form onSubmit={handleSubmit}>
                
                  <div  >  <input type="text" name="title" placeholder='Enter the task name' style={bdr} /> </div>
                
                <br/>

                    <div style={{marginLeft:"30px"}}> Enter the details about task :</div>
                  <div><textarea placeholder='Enter the details about task ' style={txarea} > </textarea> </div>
                <br/>

                  <div style={{ marginLeft: "30px" }}> Add realated image  :  <input type="file" name="taskimg" /></div>
                 
                <br/>

                
                  <div  >  <input type="text" name="title" placeholder='Time for the Task ' style={bdr} /> </div>
                <br/>
                    <div>

                    </div>
                <button className='btn btn-secondary rounded'  style={bdr} >Add Task</button>

            </form>
    </div>

      </>
  )
}

export default Sdtaskform