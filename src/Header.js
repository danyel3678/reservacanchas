import React, {Component} from "react";
import logo from "./logo.png";
import imgperfil from "./imgperfil.png";
import fondotenis from "./fondotenis.jpg";

class Header extends Component {

    render(){
        return(
            <React.Fragment>
                <img src={logo} alt="imagen logo" id="logouta"></img>
                <h3>Administracion de recintos deportivos</h3>
                <img src={imgperfil} alt="imagen perfil" id="imgperfil"></img>
            </React.Fragment>
        );
    }
}

export default Header;