
import React from "react"
import "../styles/SignIn.css"



export default function SignIn() {
	return (
		<div className="login-box">
			<h2>Login</h2>
			<form>

				<div className="user-box">
					<input type="text" name="" required="" />
					<label>Username</label>
				</div>

				<div className="user-box">
					<input type="password" name="" required="" />
					<label>Password</label>
				</div>

				<div className="button-form">
					<a id="submit" href="#">submit</a>
				</div>
				<div id="register">
					Don't have an acount?
					<a href="#"> Register</a>
				</div>
			</form>
		</div>
	)
}