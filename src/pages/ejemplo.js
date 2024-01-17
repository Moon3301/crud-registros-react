import React from "react";

class Ejemplo extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {

        let name = e.target.name;
        let value = e.target.value;
        
        this.setState({
            [name]: value,
        })

    }

    cambiarEstado = () =>{
        this.setState({
            name: 'Angular',
            age: '20',
            email: 'Angular20@gmail.com'
        });
    };



  render() {

    return (

        <div> 
            Nombre: {this.state.name} <br/>
            Edad: {this.state.age}
            Email: {this.state.email}

            <br></br>

            telefono: {this.props.telefono}
            sexo: {this.props.sexo}
            direccion: {this.props.direccion}

            <br></br>

            <div className="form-control" >
                <button className="btn btn-success" type="button" onClick={this.cambiarEstado}> Cambiar valor</button>
                <br></br>
                <input type="text" className="form-control" name="name"  placeholder="Nombre" onChange={this.onChange} />
                <input type="text" className="form-control" name="age" placeholder="Edad" onChange={this.onChange} />
                <input type="text" className="form-control" name="email" placeholder="Email" onChange={this.onChange} />

                <button type="button" className="btn btn-warning" >Cambiar</button>

            </div>

      
        </div>


      
    );
  }
}

export default Ejemplo;