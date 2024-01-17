import React from "react";
import { Link } from "react-router-dom";
import InfoClientes from "../infoClientes";
import Tablas from "./tablas";
import { agregarCliente } from "../infoClientes";



class Agregar extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = ({
            nombre: "",
            apellido: "",
            telefono: "",
            direccion: "",
            email: ""
        });

        this.onChange = this.onChange.bind(this);

        
    }

    onChange(e) {

        let name = e.target.name;
        let value = e.target.value;
        
        this.setState({
            [name]: value,
        });

       
    }
    
    render() {

        return (

            
            <div className="form-group centrar">
                
                    <br></br>
                
                    <h1>Agregar cliente</h1>

                    <input type="text" className="form-control" name="nombre" placeholder="Nombre" value={this.state.nombre} onChange={this.onChange} />
                    <br></br>
                    <input type="text" className="form-control" name="apellido" placeholder="Apellido" value={this.state.apellido}  onChange={this.onChange}  />
                    <br></br>
                    <input type="text" className="form-control" name="telefono" placeholder="Telefono" value={this.state.telefono}  onChange={this.onChange}  />
                    <br></br>
                    <input type="text" className="form-control" name="direccion" placeholder="Direccion" value={this.state.direccion}  onChange={this.onChange} />
                    <br></br>
                    <input type="text" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                    <br></br>
                    <button type="submit"><Link to="/inicio" className="btn btn-success" >Guardar</Link></button>
                    <button type="submit" className="btn btn-danger">Cancelar</button>

            </div>
        )

    }

}


export default Agregar;