import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Newsfeed/Navbar'



// component

import Banner from './profileComponent/Banner'
import Pst from './profileComponent/Pst'
import Postbox from './profileComponent/Postbox'
import ContactUs from './profileComponent/ContactUs'
import { AuthContext } from '../context/AuthContext'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import { NavLink } from 'react-router-dom'


const Profile = () => {

  const { currentUser } = useContext(AuthContext);

  const [profes, setProfes] = useState(false);

  useEffect(()=>{
    const dt = currentUser.uid;
    async function getUserdata(){
      const data1 = await getDoc(doc(db, "users", dt));

      console.log("Hi from profile");
      console.log(data1.data());

      setProfes(data1.data().professional);

      console.log(profes);
    }

    getUserdata();

  }, [])

  let button;
  if(!profes){
    button = <ContactUs />;
  }else{
    button = (<div className='d-flex justify-content-center p-2 m-2'>
      <div className=''> <NavLink to="/profDashboard" className='btn btn-secondary rounded'>My DashBoard</NavLink></div>
      
    </div>
    )
  }

  return (
    <>
    <Navbar/>
    <Banner />

   {button}
    
    
    <Postbox/>
     <Pst/>
 




    </>
  )
}

export default Profile