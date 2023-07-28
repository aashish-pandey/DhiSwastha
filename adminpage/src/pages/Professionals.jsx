import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import React from "react";
import Navigation from "../Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Professionals.css";
import { getDocs, collection } from "firebase/firestore";



export default function Professionals() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    // const password = e.target[6].value;
    const file = e.target[6].files[0];
    console.log(displayName);
    e.target[6].value = "";

    try {
      //Create user
      // const res = await createUserWithEmailAndPassword(auth, email, password);

      const data = await getDocs(collection(db, "users"));
      let res = ""
      data.forEach((dt) => {
        console.log("from getUsers function" + dt.data().displayName);

        if(dt.data().email == email)res = dt.data().uid;
      });

      try{
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
        
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            // await updateProfile(res.user, {
            //   displayName,
            //   photoURL: downloadURL,
            // });

            //create professional on firestore
            await setDoc(doc(db, "professionals", res), {
              uid: res,
              displayName,
              email,
              photoURL: downloadURL,
            });


            //update user on firestore

            await updateDoc(doc(db, "users", res), {
              professional: true
            })

            // //create empty user chats on firestore
            // await setDoc(doc(db, "userChats", res.user.uid), {}).then(()=>{
            //   alert('Professionals added successfully');
            //   e.target[0].value = "";

            // });
          } catch (err) {
            console.log(err);
          }
        });
      });
    }catch(err){
      console.log(" 2nd try" + err);
    } 
    
  }catch (err) {
      console.log("Error: " + err);
    }
   
  };

  return (
    <div className="body1">
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
              placeholder="Enter the professional username"
              style={{ width: "50%", height: "40px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter the professional email"
              style={{ width: "50%", height: "40px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Degree</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the professional highest degree"
              style={{ width: "50%", height: "40px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the professional age"
              style={{ width: "50%", height: "40px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Adress</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the professional adress"
              style={{ width: "50%", height: "40px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Years of experience</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the professional experience"
              style={{ width: "50%", height: "40px" }}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter the professioanl password"
              style={{ width: "50%", height: "40px" }}
            />
          </Form.Group> */}

          <Form.Group className="mb-3" controlId="formBasicFile">
            <Form.Label>Add an avatar</Form.Label>
            <Form.Control
              required
              style={{ display: "none" }}
              type="file"
              id="file"
            />
            
            <Button variant="success" style={{ width: "8%", height: "40px", "margin-right":"50px"}}>
              <label htmlFor="file">Add Avatar</label>
            </Button>
          </Form.Group>
          <br />
          <Button
            variant="primary"
            type="submit"
            style={{ width: "50%", height: "40px" }}
          >
            Add professional
          </Button>
        </Form>
      </div>
    </div>
  );
}
