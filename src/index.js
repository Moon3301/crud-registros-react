import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Ejemplo from './pages/ejemplo';
import Inicio from './pages/inicio';


class ByeMessage extends React.Component {
  render() {
    return <h1>Chao ctm {this.props.name}</h1>;
  }
}



class HelloMessage extends React.Component {
  render() {
    
    return <div><ByeMessage name={this.props.name}/></div>;
  }
}



const container = document.getElementById('root')

ReactDOM.render(<App/>, container);

