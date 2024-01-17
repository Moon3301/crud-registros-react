import React from "react";
import { Link } from "react-router-dom";
import Tablas from "./tablas";
import Badges1 from "./Badges1";
class Badges extends React.Component {

  state =  {
    numeroPadre: 0
  }

  handleOnClickLogon = () => {
    console.log('mensaje al dar click');
  }

  handlePadre = (NumeroHijo) => {
    this.setState({numeroPadre: NumeroHijo})
    console.log('funcion del padre');
  }

  render() {
    const { numeroPadre } = this.state;
    return (
      <div className="from-container">
       
          <Badges1  handlePadre={this.handlePadre}/>
          <h1>{numeroPadre}</h1>
       
      </div>
    )
  }
}

export default Badges;