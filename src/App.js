import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "../src/styles/App.css";
import SignIn from "./componets/SignIn.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}
