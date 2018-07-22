import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar.js';
import LogInForm from '../../components/LogInForm/LogInForm.js';
import RegisterForm from '../../components/RegisterForm/RegisterForm.js';
import Forms from '../forms/Forms';
import './App.css';

let route = 'home';

class App extends Component {
	constructor() {
		super();
		this.state = {
      email: 'nathan.freney@gmail.com',
      connection_name: 'test',
      isLoggedIn: true,
      email: '',
      password: '',
      forms: [1]
		}
	}

	onInputChange = (event) => {
		console.log(event.target.value);
	}

  onQueryChange = (event) => {
    console.log(event.target.value)
    this.setState({query: event.target.value})
  }

  onSchemaChange = (event) => {
    console.log(event.target.value)
    this.setState({schema: event.target.value})
  }

  onTableChange = (event) => {
    console.log(event.target.value)
    this.setState({table_name: event.target.value})
  }

  onCadenceSelect = (event) => {
    console.log(event.target.value)
    this.setState({cadence: event.target.value})
  }

  onDateChange = (event) => {
    this.setState({anchor_time: event.target.value})
  }

  onSubmitQuery = () => {
    alert(this.state.email)
    fetch('http://localhost:3000/query', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        connection_name: this.state.connection_name,
        query: this.state.query,
        schema: this.state.schema,
        table_name: this.state.table_name,
        anchor_time: this.state.anchor_time,
        cadence: this.state.cadence
      })
    })
  }

  onFormAdd = () => {
    const num = this.state.forms.length
    this.setState((prevState) => {
      return {
        forms: prevState.forms.concat(num+1)
      }
    })
  }

  onSubmitSignIn = () => {
    alert(this.state.email)
    fetch('http://localhost:3000/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(response => alert(response))
  }

	onSubmit = () => {
		alert('Submitted');
	}

  checkLogIn = () => {
    if (this.state.isLoggedIn) {
      return true
    } else {
      return false
    }
  }

  render() {
  	if (!this.checkLogIn()) {
  		return (
  			<div>
      			<Navbar />
      			<LogInForm onSubmit={this.onSubmitSignIn} />
      		</div>
  		)
  	// } else if (checkLogIn()) {
  	// 	return (
  	// 		<div>
  	// 			<Navbar />
  	// 			<RegisterForm />
  	// 		</div>
  	// 	)
  	} else {
  		return (
	      <div>
	      	<Navbar />
	      	<Forms
            onQueryChange={this.onQueryChange}
            forms={this.state.forms} onFormAdd={this.onFormAdd}
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
            onSchemaChange={this.onSchemaChange}
            onTableChange={this.onTableChange}
            onCadenceSelect={this.onCadenceSelect}
            onDateChange={this.onDateChange}
            onSubmitQuery={this.onSubmitQuery}
            email={this.state.email}
          />
	      </div>
	    );
  	}
  }
}

export default App;
