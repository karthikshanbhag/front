import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
      <Route exact path="/"><Home/></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/signup"><Signup/></Route>
      <Route exact path="/profile"><Profile/></Route>
    </BrowserRouter>
  );
}

export default App;
