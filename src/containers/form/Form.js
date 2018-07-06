import React, { Component } from 'react';
import QueryEditor from '../../components/query_editor/QueryEditor.js';
import SchemaText from '../../components/schema_field/SchemaText.js';
import DatePicker from '../../components/DatePicker/DatePicker.js';
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton.js';
import CadenceSelector from '../../components/CadenceSelector/CadenceSelector.js';
import '../app/App.css';
import './form.css';

class Form extends Component {
	render() {
		return (
			<div className='CenteredForm'>
				<QueryEditor />
				<SchemaText />
				<DatePicker />
				<CadenceSelector />
				<ScheduleButton />
			</div>
		)
	}
}

export default Form;