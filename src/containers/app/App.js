import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar.js';
//import QueryEditor from '../../components/query_editor/QueryEditor.js';
//import SchemaText from '../../components/schema_field/SchemaText.js';
//import DatePicker from '../../components/DatePicker/DatePicker.js';
//import ScheduleButton from '../../components/ScheduleButton/ScheduleButton.js';
//import CadenceSelector from '../../components/CadenceSelector/CadenceSelector.js';
import LogInForm from '../../components/LogInForm/LogInForm.js';
import RegisterForm from '../../components/RegisterForm/RegisterForm.js';
import Form from '../form/Form';
import './App.css';

let route = 'home';

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
		}
	}

	onInputChange = (event) => {
		console.log(event.target.value);
	}

	onSubmit = () => {
		console.log('Submitted');
	}

  render() {
  	if (route === 'login') {
  		return (
  			<div>
      			<Navbar />
      			<LogInForm />
      		</div>
  		)
  	} else if (route === 'register') {
  		return (
  			<div>
  				<Navbar />
  				<RegisterForm />
  			</div>
  		)
  	} else {
  		return (
	      <div>
	      	<Navbar />
	      	<Form onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
	      </div>
	    );
  	}
  }
}

export default App;
