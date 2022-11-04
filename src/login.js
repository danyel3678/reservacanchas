import React, {Component} from "react";

class Login extends Component {

    render(){
        return(
            <div className="login">
                <div>
                    <a>Usuario</a>
                    <input type="text" className="user" ></input>
                    <br></br>
                    <a>Contrasena</a>
                    <input type="password" className="password" ></input>
                </div>
                <button id="login">Login</button>
                <button id="register">Registrarse</button>
            </div>
        );
    }
}

export default Login;