import React, {Component} from "react";
import logo from "./logo.png";
import imgperfil from "./imgperfil.png";
import fondotenis from "./fondotenis.jpg";

class Header extends Component {

    render(){
        return(
            <React.Fragment>
                <a href="/">
                    <img src={logo} alt="imagen logo" id="logouta"></img>
                </a>
                <h1>Administracion de recintos deportivos</h1>
                <a href="/admin">
                    <img src={imgperfil} alt="imagen perfil" id="imgperfil"></img>
                </a>
            </React.Fragment>
        );
    }
}

export default Header;