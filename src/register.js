import React, {Component} from "react";

class Register extends Component {

    render(){

        const data={
            nombre: '',
            correo: '',
            contrasena: ''
        }

        const handleChange = e => {
            if (e.target.name ==='nombre'){
                data.nombre=e.target.value
            }
            if (e.target.name ==='correo'){
                data.correo=e.target.value
            }
            if (e.target.name ==='contrasena'){
                data.contrasena=e.target.value
            }

        }

        const handleSubmit = async() =>{
            await fetch('http://localhost:4000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
        }
        return(
            <div className="register">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" onChange={handleChange} aria-describedby="emailHelp" placeholder="Nombre"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo</label>
                        <input type="text" class="form-control" id="correo" name="correo" onChange={handleChange} placeholder="Correo"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" class="form-control" id="contrasena" name="contrasena" onChange={handleChange} placeholder="Contraseña"></input>
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