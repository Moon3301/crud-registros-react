import React from "react";
import Tablas from "./tablas";
import Agregar from "./agregar";
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
import { Link } from "react-router-dom";

// Se crea una lista lista de clientes para mostrar en la tabla
const data = [
    {id: 1, nombre: "Juan", apellido: "Perez", edad: "23", direccion: "Calle 123", telefono: "123456789"},
    {id: 2, nombre: "Pedro", apellido: "Gonzalez", edad: "25", direccion: "Calle 123", telefono: "123456789"},
    {id: 3, nombre: "Maria", apellido: "Lopez", edad: "27", direccion: "Calle 123", telefono: "123456789"},
    {id: 4, nombre: "Jose", apellido: "Gomez", edad: "29", direccion: "Calle 123", telefono: "123456789"},
    {id: 5, nombre: "Ana", apellido: "Martinez", edad: "31", direccion: "Calle 123", telefono: "123456789"},
    {id: 6, nombre: "Juan", apellido: "Perez", edad: "23", direccion: "Calle 123", telefono: "123456789"},
]

class Inicio extends React.Component {

    
    state = {
        data: data, // Se asigna los datos de la lista de cliente a uan variable dentro de state llamada data
        form:{      // Se crea un objeto llamado form para almacenar los datos del formulario
            id:'',
            nombre:'',
            apellido:'',
            edad:'',
            direccion:'',
            telefono:''
        },
        modalInsertar: false, // Se crea una variable llamada modalInsertar para mostrar el modal de agregar
        modalEditar: false // Se crea una variable llamada modalEditar para mostrar el modal de editar
    };

    handleChange=e=>{ // Se crea una funcion para manejar los cambios en el formulario
        this.setState({
            form:{
                ...this.state.form, // Se crea una copia del objeto form
                [e.target.name]:e.target.value, // Se asigna el valor del input a la propiedad name del objeto form
            }
        });
    }

    mostrarModalInsertar=()=>{ // Se crea una funcion para mostrar el modal de agregar
        this.setState({modalInsertar: true})
    }

    ocultarModalInsertar=()=>{ // Se crea una funcion para ocultar el modal de agregar
        this.setState({modalInsertar: false})
    }

    mostrarModalEditar=(registro)=>{ // Se crea una funcion para mostrar el modal de editar
        this.setState({modalEditar: true, form: registro})
    }

    ocultarModalEditar=()=>{ // Se crea una funcion para ocultar el modal de editar
        this.setState({modalEditar: false})
    }

    insertar=()=>{ // Se crea una funcion para insertar un nuevo registro
        var valorNuevo={...this.state.form}; // Se crea una variable llamada valorNuevo para almacenar los datos del formulario
        valorNuevo.id=this.state.data.length+1; // Se le asigna un id al nuevo registro
        var lista = this.state.data; // Se crea una variable llamada lista para almacenar los datos de la lista de clientes
        lista.push(valorNuevo); // Se agrega el nuevo registro a la lista
        this.setState({  // Se actualiza el estado
            data: lista, // Se actualiza la lista de clientes
            modalInsertar:false // Se oculta el modal de agregar
        });
    }

    editar=(dato)=>{ // Se crea una funcion para editar un registro
        var contador=0; // Se crea una variable llamada contador para contar los registros editados
        var lista = this.state.data; // Se crea una variable llamada lista para almacenar los datos de la lista de clientes
        lista.map((registro)=>{ // Se crea una funcion para recorrer la lista de clientes
            if (dato.id==registro.id){ // Se crea una condicion para verificar si el id del registro es igual al id del registro que se va a editar
                lista[contador].nombre=dato.nombre; // Se actualiza el nombre del registro
                lista[contador].apellido=dato.apellido; // Se actualiza el apellido del registro
                lista[contador].edad=dato.edad; // Se actualiza la edad del registro
                lista[contador].direccion=dato.direccion; // Se actualiza la direccion del registro
                lista[contador].telefono=dato.telefono; // Se actualiza el telefono del registro
            }
            contador++; // Se aumenta el contador
        });
        this.setState({data: lista, modalEditar: false}); // Se actualiza el estado
    }
    eliminar=(dato)=>{
        var opcion = window.confirm("Realmente desea eliminar el registro "+dato.id);
        if (opcion == true){
            var contador = 0;
            var lista = this.state.data;
            lista.map((registro)=>{
                if(registro.id==dato.id){
                    lista.splice(contador, 1);
                }
                contador++;
            });
            this.setState({data: lista})
        }
    }

    render() {

        return (
            <>

                <Container>
                <br/>
                <button className="btn btn-primary" onClick={()=>this.mostrarModalInsertar()}>Insertar nuevo cliente </button>
                <br/>
                <br/>

                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>Acciones</th>
                        </tr>

                    </thead>

                    <tbody>
                        {this.state.data.map((elemento) => (
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.apellido}</td>
                                <td>{elemento.edad}</td>
                                <td>{elemento.direccion}</td>
                                <td>{elemento.telefono}</td>
                                <td><button className="btn btn-primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</button></td>
                                <td><button className="btn btn-danger" onClick={()=>this.eliminar(elemento)}>Borrar</button></td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

                <Link to="/Badges" className="btn btn-primary">Badges</Link>

                </Container>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Registro</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                id:
                            </label>

                            <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Nombre:
                            </label>

                            <input className="form-control" name="nombre" type="text" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Apellido:
                            </label>

                            <input className="form-control" name="apellido" type="text" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Edad:
                            </label>

                            <input className="form-control" name="edad" type="text" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Direccion:
                            </label>

                            <input className="form-control" name="direccion" type="text" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Telefono:
                            </label>

                            <input className="form-control" name="telefono" type="text" onChange={this.handleChange}/>
                        </FormGroup>

                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={()=>this.insertar()} >
                            Insertar
                        </Button>

                        <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>
                            Cancelar
                        </Button>
                    </ModalFooter>

                </Modal>

                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>
                        <div><h3>Insertar Registro</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                id:
                            </label>

                            <input className="form-control" readOnly type="text" value={this.state.form.id}/>
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Nombre:
                            </label>

                            <input className="form-control" name="nombre" type="text" onChange={this.handleChange} value={this.state.form.nombre}/>
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Apellido:
                            </label>

                            <input className="form-control" name="apellido" type="text" onChange={this.handleChange} value={this.state.form.apellido}/>
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Edad:
                            </label>

                            <input className="form-control" name="edad" type="text" onChange={this.handleChange} value={this.state.form.edad}/>
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Direccion:
                            </label>

                            <input className="form-control" name="direccion" type="text" onChange={this.handleChange} value={this.state.form.direccion}/>
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Telefono:
                            </label>

                            <input className="form-control" name="telefono" type="text" onChange={this.handleChange} value={this.state.form.telefono}/>
                        </FormGroup>

                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={()=>this.editar(this.state.form)} >
                            Insertar
                        </Button>

                        <Button color="danger" onClick={()=>this.ocultarModalEditar()}>
                            Cancelar
                        </Button>
                    </ModalFooter>

                </Modal>

                
                
                

            </>
        )

    }




}

export default Inicio;