import React, {Component} from "react";

class Cancha extends Component {

    render(){
        return(
            <div className="Cancha">
                <div>
                    <h2>Interfaz Administracion</h2>
                    <div className="opciones">
                        <div className="botones-admin">
                        <button type="button" class="btn btn-secondary">Agregar actividad</button>
                        <button type="button" class="btn btn-secondary">Crear actividad</button>
                        <button type="button" class="btn btn-secondary">Quitar actividad</button>
                        <button type="button" class="btn btn-secondary">Eliminar actividad</button>
                        </div>
                    </div>
                    <div className="resumen-actividades">
                        <h4>Actividades cancha 1</h4>

                        <div className="principal-horario">
                        <table class="table table-light table-bordered border-primary">
                            <tbody class="table-active">
                                <tr class="table-active">
                                    <th scope="row">Vacio</th>
                                    <td class="table-active">Lunes</td>
                                    <td>Martes</td>
                                    <td>Miercoles</td>
                                    <td>Jueves</td> 
                                    <td>Viernes</td>
                                <td>Sabado</td>
                                </tr>
                                <tr class="table-active">
                                    <th>Bloque 1</th>
                                    <td>
                                        <td>
                                            a1
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </td>
                                    <td>
                                        <td>
                                            
                                        </td>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="table-active">
                                    <th>Bloque 2</th>
                                    <td>
                                        <td>
                                            a1
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="table-active">
                                    <th>Bloque 3</th>
                                    <td>
                                        <td>
                                            a1
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </td>
                                    <td>
                                        <td>
                                            
                                        </td>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="table-active">
                                    <th>Bloque 4</th>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="table-active">
                                    <th>Bloque 5</th>
                                    <td>
                                        <td>
                                            
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </td>
                                    <td>
                                        <td>
                                            a1
                                        </td>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="table-active">
                                    <th>Bloque 6</th>
                                    <td>
                                        <td>
                                            
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </td>
                                    <td>
                                        <td>
                                            a1
                                        </td>
                                    </td>
                                    <td>
                                        <td>a1</td>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="table-active">
                                    <th>Bloque 7</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <td>a1</td>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="resumen-solicitudes">
                        <h4>Solicitudes Cancha 1</h4>
                        <div class="bg-light text-dark">
                            <table>
                                <tr>
                                    <td>Cancha</td>
                                    <td>1</td>
                                    <td>Tennis</td>
                                    <td>Bloque 2</td>
                                </tr>
                                <tr>
                                    <td>Cancha</td>
                                    <td>1</td>
                                    <td>Tennis</td>
                                    <td>Bloque 6</td>
                                </tr>
                                <tr>
                                    <td>Cancha</td>
                                    <td>1</td>
                                    <td>Tennis</td>
                                    <td>Bloque 1</td>
                                </tr>
                                <tr>
                                    <td>Cancha</td>
                                    <td>1</td>
                                    <td>Tennis</td>
                                    <td>Bloque 7</td>
                                </tr>
                                <tr>
                                    <td>Cancha</td>
                                    <td>1</td>
                                    <td>Tennis</td>
                                    <td>Bloque 4</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cancha;