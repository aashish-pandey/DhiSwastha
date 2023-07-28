import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Navigation from "../Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { async } from "@firebase/util";
export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await getDocs(collection(db, "posts"));
        const urs = [];
        data.forEach((dt) => {
          // console.log(dt.data().displayName);
          urs.push(dt.data());
        });
        setPosts(urs);
      } catch (error) {
        console.log("Bro error: in posts ", +error);
      }
    }

    getUsers();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("From delete ");
    window.location.reload(true);
  };

  return (
    <div>
      <Navigation />
      <br />
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
                <th>Users</th>
                <th>Story</th>
                <th>Delete Post</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{post.displayName}</td>
                  <td width="50%">{post.story}</td>
                  <td width="200px">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={async () => {
                        await deleteDoc(doc(db, "posts", post.pid));
                        window.location.reload(true);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}

              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
