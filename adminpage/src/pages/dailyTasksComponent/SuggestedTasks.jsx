import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, uploadBytesResumable, ref} from "firebase/storage";
import React, { useEffect, useReducer, useState, useContext } from "react";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import Button from "react-bootstrap/Button";

export default function SuggestedTasks() {
    const { currentUser } = useContext(AuthContext);

    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        async function getTasks(){
            try{
                const data =  await getDocs(collection(db, "SuggestDailyTasks"));

                const tsks = [];

                data.forEach(dt=>{
                    console.log(dt.data());
                    tsks.push(dt.data());
                })

                setTasks(tsks);
            }catch(err){
                console.log("Error in fetching all taks : " + err);
            }
        }

        getTasks();
    }, [])

    async function handleDelete(task){
        await deleteDoc(doc(db, "SuggestDailyTasks", task.taskUid));
        window.location.reload(true);
    }

    async function handleAdd(task){
        const title = task.title;
        const details = task.details;
        const file = task.tasksImg;
        const name = task.professionalName;
        const duration = task.duration;

        
                    try{
                        const date = new Date().getTime();
                        await setDoc(doc(db, "DailyTasks", `${currentUser.uid + title + date}`), {
                            title,
                            details, 
                            tasksImg: file,
                            professionalName: name,
                            duration,
                            uid: currentUser.uid,
                            taskUid: currentUser.uid + title + date
                        })
                        handleDelete(task);
                    }catch(err){
                        console.log("Error in suggestnewTasks adding: " + err);
                    }
                    window.location.reload(true);

        
    }


  return (
    <>
    <br/>
        <div className="container">
        <div className="container">
          <table
            id="example"
            class="display table"
            style={{ backgroundColor: "white" }}
          >
            
            <thead class="thead-dark">
            <caption>Tasks Suggested</caption>
            <tr>
                <th>#</th>
                <th>title</th>
                <th>Details</th>
                <th>image</th>
                <th>Duration</th>
                <th>Professional name</th>
                <th>admin uid</th>
                <th>Operation</th>
            </tr>
            </thead>
            <tbody>
            
            {tasks.map((task,index)=>(
                <tr key = {task.taskUid}>
                    <td>{index}</td>
                    <td>{task.title}</td>
                    <td>{task.details}</td>
                    <td>{task.tasksImg}</td>
                    <td>{task.duration}</td>
                    <td>{task.professionalName}</td>
                    <td>{task.uid}</td>
                    <td><tr><Button variant="danger" size="sm" onClick={()=>{handleAdd(task)}}>Add</Button></tr>
                    <tr><button onClick={()=>{handleDelete(task)}}>delete</button></tr></td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
