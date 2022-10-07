import React from "react";
import "./App.css";
import Login from "./Login.js";

export default function App() {
  return (
<<<<<<< HEAD
    <div>
      <h1 className="text-center">Login</h1>
      <div className="form-group text-center">
        <label>Usuario: </label>

        <br />
        <input type="text" className="form-control" name="username" />

        <br />
        <label>Contraseña: </label>
        <br />
        <input type="password" className="form-control" name="password" />

        <br/>
        <button className="btn btn-primary" >Iniciar Sesion</button>
        
      </div>
    </div>
=======
    <Login/>
>>>>>>> 98c8bb3 (El login tiene un buen disenio, falta el registro)
  );
}
