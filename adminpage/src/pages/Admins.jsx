import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import Navigation from "../Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admins.css";

export default function Admins() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            //create user on firestore
            await setDoc(doc(db, "Admins", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (err) {
      console.log("Error");
    }
    window.location.reload(true);
  };

  return (
    <div className="body2">
      <Navigation />
      <br />
      <div
        className="container"
        style={{"margin-left":"30%"}}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter admin username"
              style={{ width: "50%", height: "40px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter admin email"
              style={{ width: "50%", height: "40px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter admin password"
              style={{ width: "50%", height: "40px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFile">
            <Form.Label>Add an avatar</Form.Label>
            <Form.Control
              required
              style={{ display: "none" }}
              type="file"
              id="file"
            />
            
            <Button
              variant="success"
              style={{ width: "8%", height: "40px", "margin-right":"50px"}}
            >
              <label htmlFor="file">Add Avatar</label>
            </Button>
          </Form.Group>
          <br />

          <Button
            variant="primary"
            type="submit"
            style={{ width: "50%", height: "40px" }}
          >
            Add Admin
          </Button>
        </Form>
      </div>
    </div>
  );
}
