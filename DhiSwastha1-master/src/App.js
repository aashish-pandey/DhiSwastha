import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Newsfeed from "./pages/Newsfeed";


//pages 
import Profile from "./pages/Profile";
import Dailytask from "./pages/Dailytask";
import Calen from "./pages/DailytaskComponent/Calen";
import ProfDashboard from "./pages/ProfDashboard";
import VideoStreaming from "./pages/VideoStreaming";
function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Newsfeed />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="Home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="Dailytask" element={
            <ProtectedRoute>
              <Dailytask />
            </ProtectedRoute>
          } />
          <Route path="Profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="Calen" element={
            <ProtectedRoute>
              <Calen />
            </ProtectedRoute>
          } />

          <Route path="ProfDashboard" element={
            <ProtectedRoute>
              <ProfDashboard/>
            </ProtectedRoute>
          } />

        <Route path="VideoStreaming" element={
            <ProtectedRoute>
              <VideoStreaming/>
            </ProtectedRoute>
          } />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;