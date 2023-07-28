import React from 'react';
import {getFirestore, doc, getDocs, collection, where} from "firebase/firestore";
import { db } from "../firebase";
import { useState } from 'react';
import { useEffect } from 'react';


export default function Professionals() {

    const [users, setUsers] = useState([]);
    let duser = ["aashish"];
    

    useEffect(()=>{
        async function getUsers(){
        
            try{
                
                const data = await getDocs(collection(db, "professionals"));
                const urs = [];
                data.forEach(dt=>{
                    console.log("from getUsers function" + dt.data().displayName);
                    // setUsers(dt.data());
                    // console.log("from function : " + users);
                    // duser.push(dt.data().displayName);
                    urs.push(dt.data().displayName);
                })
                // console.log("Hi");

                setUsers(urs);

            }
            catch(error){
                console.log("Bro error: ", + error);
            }
    
        }
        getUsers();
    }, [])
    
  return (    
    <div className='professionals'>
    <div className='title'><span className='head'>Professionals</span></div>
    <ul className='list'>
        {
            users.map((y)=>(
                <li className='listItem'>{y}</li>
            ))
        }
    </ul>
    </div>
  )
}
