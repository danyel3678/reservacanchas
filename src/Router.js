import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InterfazAdmin from "./Interfazadmin";
import Login from './login';
import Cancha from './Cancha';
import Register from "./register";

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/admin' element={<InterfazAdmin/>}></Route>
                    <Route path='/admin/cancha' element={<Cancha/>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }

}

export default Router;