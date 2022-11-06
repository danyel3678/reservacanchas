import React, {Component} from "react";

class Login extends Component {

    render(){
        return(
            <div className="login">
                <div>
                    <p>Usuario</p>
                    <input type="text" className="user" ></input>
                    <br></br>
                    <p>Contrasena</p>
                    <input type="password" className="password" ></input>
                </div>
                <a href="/admin">
                    <button id="login">Login</button>
                    <button id="register">Registrarse</button>
                </a>
            </div>
            
        );
    }
}

export default Login;