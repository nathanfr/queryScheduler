import React, { Component } from 'react';
import QueryEditor from '../../components/query_editor/QueryEditor.js';
import SchemaText from '../../components/schema_field/SchemaText.js';
import DatePicker from '../../components/DatePicker/DatePicker.js';
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton.js';
import CadenceSelector from '../../components/CadenceSelector/CadenceSelector.js';
import '../app/App.css';
import './form.css';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'changetorefloginemail',
			connection_name: 'changetorefcon',
			query: '',
			schema: '',
			table_name: '',
			anchor_time: '',
			cadence: ''
		}
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

	render() {
		return (
			<div className='CenteredForm'>
				<QueryEditor onChange={this.onQueryChange} />
				<SchemaText onSchemaChange={this.onSchemaChange} onTableChange={this.onTableChange} />
				<DatePicker onChange={this.onDateChange} />
				<CadenceSelector onChange={this.onCadenceSelect} />
				<ScheduleButton onSubmit={this.onSubmitQuery} />
			</div>
		)
	}
}

export default Form;