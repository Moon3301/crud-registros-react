import React from 'react';
import confimg from '../images/programacion.png';
import { Link } from 'react-router-dom';
import '../global.css';


class Menu extends React.Component{

    render(){

        return <div>

        <ul>
            <li><img src={confimg} alt="Java" width="50px" height="50px"></img></li>

            <li><Link to="/agregar">Agregar</Link></li>
            <li><Link to="/tablas">Tablas</Link></li>
            <li><Link to="/inicio"> Inicio</Link></li>
            <li><a>Contact</a></li>

        </ul>

        </div> 
        
    }

}

export default Menu;