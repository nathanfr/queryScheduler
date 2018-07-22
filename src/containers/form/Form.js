import React, { Component } from 'react';
import QueryEditor from '../../components/query_editor/QueryEditor.js';
import SchemaText from '../../components/schema_field/SchemaText.js';
import DatePicker from '../../components/DatePicker/DatePicker.js';
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton.js';
import AddButton from '../../components/AddButton/AddButton';
import CadenceSelector from '../../components/CadenceSelector/CadenceSelector.js';
import '../app/App.css';
import './form.css';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: this.props.email
		}
	}

	render() {
		return (
			<div className='CenteredForm'>
				<QueryEditor onChange={this.props.onQueryChange} />
				<SchemaText onSchemaChange={this.props.onSchemaChange} onTableChange={this.props.onTableChange} />
				<DatePicker onChange={this.props.onDateChange} />
				<CadenceSelector onChange={this.props.onCadenceSelect} />
				<div className='buttonLine'>
					<ScheduleButton onSubmit={this.props.onSubmitQuery} />
					<AddButton onSubmit={this.props.onFormAdd} />
				</div>
			</div>
		)
	}
}

export default Form;