 import React, {Fragment,useState}  from 'react'

class FormularioRegistroEvento extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = {
          persona: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({persona : event.target.value});
    }
  
    handleSubmit(event) {
      alert('Nombre: ' + this.state.persona);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={this.state.persona} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
export default FormularioRegistroEvento