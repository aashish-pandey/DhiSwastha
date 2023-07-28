import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useReducer, useState } from "react";
import { db } from "../../firebase";
import Button from "react-bootstrap/Button";
import Navigation from "../../Navigation";
export default function ShowTasks(){

    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        async function getTasks(){
            try{
                const data =  await getDocs(collection(db, "DailyTasks"));

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

    return(
        <>
        <Navigation/>
        <br/>
        <div className="container">
        <div className="container">
          <table
            id="example"
            class="display table"
            style={{ backgroundColor: "white" }}
          >
            <thead class="thead-dark">
            <tr>
                <th>#</th>
                <th>title</th>
                <th>Details</th>
                <th>image</th>
                <th>Duration</th>
                <th>Professional name</th>
                <th>Admin uid</th>
                <th>Delete</th>
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
                    <td><Button variant="danger" size="sm" onClick={async()=>{await deleteDoc(doc(db, "DailyTasks", task.taskUid));
    window.location.reload(true);
}}>Delete</Button></td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>

        </>
    )
}