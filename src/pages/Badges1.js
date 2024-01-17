import React from "react";
import Badges from "./Badges";


export default class Badges1 extends React.Component {

    state = {
        NumeroHijo: 3
      }
    
      handleHijo = () => {
        const { handlePadre } = this.props;
        const { NumeroHijo } = this.state;
          handlePadre(NumeroHijo);
      }
    
      render() {
        return <button type="button" onClick={this.handleHijo}>Child</button>
      }

}