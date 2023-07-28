import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Professionals from "./pages/Professionals";
import Admins from "./pages/Admins";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./Login";
import DailyTasks from "./pages/DailyTasks";
import React from "react";
import AddNewTasks from "./pages/dailyTasksComponent/AddNewTasks";
import ShowTasks from "./pages/dailyTasksComponent/ShowTasks";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="Users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="Posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />

        <Route
          path="Professionals"
          element={
            <ProtectedRoute>
              <Professionals />
            </ProtectedRoute>
          }
        />

        <Route
          path="Admins"
          element={
            <ProtectedRoute>
              <Admins />
            </ProtectedRoute>
          }
        />

        <Route
          path="DailyTasks"
          element={
            <ProtectedRoute>
              <DailyTasks />
            </ProtectedRoute>
          }
        />

<Route
          path="DailyTasks/AddNewTasks"
          element={
              <AddNewTasks />
          }
        />
        <Route
          path="DailyTasks/ShowTasks"
          element={
            <ProtectedRoute>
              <ShowTasks />
            </ProtectedRoute>
          }
        />

        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
