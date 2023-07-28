import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Professionals from '../components/Professionals'
import Navbar from '../components/Newsfeed/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='home'>
      <div className="container">
        <Professionals className="professionals"/>
        <Sidebar className="sidebar"/>
        <Chat className="chats"/>
      </div>
    </div>
    </>
  )
}

export default Home