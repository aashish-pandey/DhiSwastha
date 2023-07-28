import React, { useEffect, useState } from "react";
import Navbar from "../components/Newsfeed/Navbar";
import Calen from "./DailytaskComponent/Calen";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


import "./DailytaskComponent/dtask.css"





const Dailytask = () => {

    const [tsks, setTasks] = useState([]);

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


  
    // const tasks = [
    //     {
    //         title: "TASK 1",
    //         task: "This is the task ",
    //         description: "Track gratitude and achievement with a journal. Include 3 things you were grateful for and 3 things you were able to accomplish each day. ",
    //         result: "",
    //         img: dt,
    //     }
    //     ,
    //     {
    //         title: "TASK 2",
    //         task: "This is the task ",
    //         description: "Start your day with a cup of co­ffee. Coff­ee consumption is linked to lower rates of depression. If you can’t drink coff­ee because of the caff­eine, try another good-for-you drink like green tea",
    //         result: "",
    //         img: coffe,
    //     }
    //     ,
    //     {
    //         title: "TASK 3 ",
    //         task: "This is the task ",
    //         description: "Set up a getaway. It could be camping with friends to the tropics. The act of planning a vacation and having something to look forward to can boost your overall happiness for up to 8 weeks! ",
    //         result: "",
    //         img :travel
    //     }
    //     ,
    //     {
    //         title: "TASK 4 ",
    //         task: "This is the task ",
    //         description: "Work your strengths. Do something you're good at to build self-confidence, then tackle a tougher task. ",
    //         result: "",
    //         img :solve
    //     }
    //     ,
    //     {
    //         title: "TASK 5 ",
    //         task: "This is the task ",
    //         description: " Keep it cool for a good night's sleep. The optimal temperature for sleep is between 60 and 67 degrees Fahrenheit.",
    //         result: "",
    //         img :cool,
    //     }
    //     ,
    //     {
    //         title: "TASK 6",
    //         task: "This is the task ",
    //         description: "Experiment with a new recipe, write a poem, paint or try a Pinterest project. Creative expression and overall well-being are linked. ",
    //         result: "",
    //         img :trynew
    //     }
    //     ,
    // ]

    return (
        <>
    <Navbar />
  
        <div className="row m-5 ">
            {
                tsks.map((task)=>(
                    <div className="col-lg-4  col-md-6  col-sm-12"> 
                     <Calen title={task.title} description ={task.details} img = {task.tasksImg}  /> 
                    </div>
                ))
            }
        </div>

          
            
        

        </>
    )
}

export default Dailytask;