import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import Navigation from "../Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await getDocs(collection(db, "users"));
        const urs = [];
        data.forEach((dt) => {
          console.log("from getUsers function" + dt.data().displayName);

          urs.push(dt.data().displayName);
        });
        // console.log("Hi");

        setUsers(urs);
      } catch (err) {
        console.log(err);
      }

    }

    getUsers();
  }, []);

  return (
    <div className="body2">
      <Navigation />
      <br/>
<div className="container">
<div className="container">
        <table id="example" class="display table" style={{"backgroundColor":"white"}}>
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>Users</th>
              {/* <th>Block User</th> */}
              {/* <th>Delete User</th> */}
            </tr>
          </thead>
          <tbody>
          {users.map((y,index) => (
              <tr>
                <td>{index}</td>
                <td>{y}</td>
                {/* <td><Button variant="outline-warning" size="sm">Block</Button></td> */}
                {/* <td width="200px"><Button variant="danger" size="sm">Delete</Button></td> */}
              </tr>
))}
            
          </tbody>
        </table>
      </div>
</div>
      
    </div>
  );
}
