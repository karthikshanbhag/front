import React from "react";
import { BrowserRouter , Route,Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      
      <Route exact path="/" element={<Home/>}> </Route>
      <Route exact path="/login" element={<Login/>}> </Route>
      <Route exact path="/signup" element={<Signup/>}> </Route>
      <Route exact path="/profile" element={<Profile/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
