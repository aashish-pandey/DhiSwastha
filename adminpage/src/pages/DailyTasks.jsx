import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import "./Home.css";
import AddNewTasks from "./dailyTasksComponent/AddNewTasks";
import ShowTasks from "./dailyTasksComponent/ShowTasks";
import SuggestedTasks from "./dailyTasksComponent/SuggestedTasks";

export default function DailyTasks() {
  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      

        {/* <div>
            <AddNewTasks/>
            <SuggestedTasks/>
        </div>

        <div>
            <ShowTasks/>
        </div> */}

      <div className="cardBoxO">
        <div className="cardBoxI">
          <button
            onClick={() => {
              navigate("AddNewTasks");
            }}
          >
            AddNewTasks
          </button>
        </div>

        <div className="cardBoxI">
          <button
            onClick={() => {
              navigate("ShowTasks");
            }}
          >
            ShowTasks
          </button>
        </div>
      </div>
    </>
  );
}
