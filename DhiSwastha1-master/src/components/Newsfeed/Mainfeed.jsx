import React from 'react'
import PostForm from './mainfeed/PostForm'
import Posts from './mainfeed/Posts'
import './Newsfeed1.css'


export default function Mainfeed() {
  return (
    <div className='mainFeedN'>
      <PostForm/>
      <Posts/>
    </div>
  )
}
