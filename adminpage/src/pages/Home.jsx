import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navigation from "../Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "../Counter/Counter";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navigation />
      

      <div className="cardBoxO">
        <div className="cardBoxI">
          <button
            onClick={() => {
              navigate("Users");
            }}
          >
            Users
          </button>
        </div>

        <div className="cardBoxI">
          <button
            onClick={() => {
              navigate("Posts");
            }}
          >
            Posts
          </button>
        </div>

        <div className="cardBoxI">
          <button
            onClick={() => {
              navigate("Professionals");
            }}
          >
            Professionals
          </button>
        </div>

        <div className="cardBoxI">
          <button
            onClick={() => {
              navigate("Admins");
            }}
          >
            Admins
          </button>
        </div>

        <div className="cardBoxI">
          <button
            onClick={() => {
              navigate("DailyTasks");
            }}
          >
            Daily Tasks
          </button>
        </div>
      </div>

      <Counter />
    </div>
  );
}
