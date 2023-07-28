import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase';
import Post from './Post'
import './Posts.css'

export default function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {

        const data = await getDocs(collection(db, "posts"));
        const urs = [];
        data.forEach(dt => {

          urs.push(dt.data());

        })
        console.log(urs)
        urs.sort(function (a, b) {
          return b.date - a.date;
        })

        setPosts(urs);

      }
      catch (error) {
        console.log("Bro error: in posts ", + error);
      }

    }



    getUsers();
  }, [])

  return (
    <div>


      {posts.map((post) => (
        <div className="postDiv">
          <Post info={post} key={post.date} />
        </div>
      ))}

    </div>
  )
}