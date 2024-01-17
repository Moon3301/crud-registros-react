import React from "react";
import Tablas from "./pages/tablas";


let clientes = [];

class InfoClientes extends React.Component {

    
    

    render() {
        return

    }

}


function agregarCliente(nom, ape, tel, dir, email) {
    
    clientes.push({
        nombre: nom,
        apellido: ape,
        telefono: tel,
        direccion: dir,
        email: email,
    });
}

function mostrarClientes() {
    return clientes;
}

export { agregarCliente, mostrarClientes };
export default InfoClientes;