import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InterfazAdmin from "./Interfazadmin";
import Login from './login';

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/admin' element={<InterfazAdmin/>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }

}

export default Router;