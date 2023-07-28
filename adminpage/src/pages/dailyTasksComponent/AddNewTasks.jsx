import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { storage, db } from "../../firebase";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import SuggestedTasks from "./SuggestedTasks";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navigation from "../../Navigation";
import "./AddNewTasks.css";
export default function AddNewTasks() {
  const { currentUser } = useContext(AuthContext);

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    // console.log("Success");

    const title = e.target[0].value;
    const details = e.target[1].value;
    const file = e.target[2].files[0];
    const name = e.target[3].value;
    const duration = e.target[4].value;

    try {
      const date = new Date().getTime();
      const storageRef = ref(storage, `${title + name + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await setDoc(
              doc(db, "DailyTasks", `${currentUser.uid + title + date}`),
              {
                title,
                details,
                tasksImg: downloadURL,
                professionalName: name,
                duration,
                uid: currentUser.uid,
                taskUid: currentUser.uid + title + date,
              }
            );
          } catch (err) {
            console.log("Error in addNewTasks adding: " + err);
          }
        });
      });
    } catch (err) {
      console.log("Error in add new tasks: " + err);
    }
    window.location.reload(true);
  };

  return (
    <>
      <div className="body4">
        <Navigation />
        <br />
        <div className="container" style={{ "margin-left": "30%" }}>
          <Form onSubmit={handleTaskSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Enter the task name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Task name"
                style={{ width: "50%", height: "40px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Enter the details about task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Details about task"
                style={{ width: "50%", height: "40px" }}
              />
            </Form.Group>

            <br />

            <Form.Group className="mb-3" controlId="formBasicFile">
              <Form.Label>Add the image related to the task</Form.Label>
              <Form.Control
                required
                style={{ display: "none" }}
                type="file"
                id="file"
              />

              <Button
                variant="success"
                name="taskimg"
                style={{ width: "8%", height: "40px", "margin-right": "50px" }}
              >
                <label htmlFor="file">Add Avatar</label>
              </Button>
            </Form.Group>
            <br />

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>
                Enter the expected time to complete that task
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Complition Time"
                style={{ width: "50%", height: "40px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>
                Enter the professional Name who suggested the task
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="professional Name"
                style={{ width: "50%", height: "40px" }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ width: "50%", height: "40px" }}
            >
              Add Task
            </Button>
          </Form>
        </div>

        <SuggestedTasks />
      </div>
    </>
  );
}
