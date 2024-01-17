import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Agregar from './agregar';
import { mostrarClientes } from '../infoClientes';

let datos = [];


class Tablas extends React.Component{

    constructor(props){
        super(props);
        this.state = ({
            nombre: "",
            apellido: "",
            telefono: "009999999",
            direccion:  this.props.direccion,
            email: "ncacnasi@gmail.com",
        });

        datos = mostrarClientes();

        console.log(datos);
       
    }

    render(){

        

        return (<div>
            <br></br>
            <table className="col-sm-12">

                <tr className="trmenu"> 
                    <td>Nombre </td>
                    <td>Apellido </td>
                    <td>Telefono </td>
                    <td>Direccion </td>
                    <td>email </td>
                </tr>
                <br></br>   
                <tr > 
                    <td>{this.props.nombre}</td>
                    <td>{this.props.apellido}</td>
                    <td>{this.state.telefono}</td>
                    <td>{this.props.direccion}</td>
                    <td>{this.state.email}</td>
                </tr>

                <tr>
                    <td></td>
                </tr>

            </table>
            
            <div>
                <div className="btn" >
                    <Link to="/badges"> Abrir tabla </Link>
                </div>
            </div>



        </div>);
        
    }

    
}

export default Tablas;


/*
<table className="col-sm-12">

<tr className="trmenu"> 
    <td>Nombre </td>
    <td>Apellido </td>
    <td>Telefono </td>
    <td>Direccion </td>
    <td>Sexo </td>
</tr>
<br></br>
<tr> 
    <td>Juan</td>
    <td>Perez</td>
    <td>123456789</td>
    <td>Calle 123</td>
    <td>Masculino</td>
</tr>

</table>
*/