import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "../src/styles/App.css";
import SignIn from "./componets/SignIn.js";
import SignUp from "./componets/SignUp.js";
import NavBar from "./componets/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}
