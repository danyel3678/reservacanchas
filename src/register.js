import React, {Component} from "react";

class Register extends Component {

    render(){
        return(
            <div className="register">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" aria-describedby="emailHelp" placeholder="Nombre"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Usuario</label>
                        <input type="password" class="form-control" id="usuario" name="usuario" placeholder="Usuario"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" class="form-control" id="contrasena" name="contrasena" placeholder="Contraseña"></input>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            
        );
    }
}

export default Register;