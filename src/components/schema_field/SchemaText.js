import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField'
import './SchemaText.css';

const SchemaText = ({ onSchemaChange, onTableChange }) => {
	return (
		<div id="schemaDefinition" className='center tc'>
			<TextField
			  onChange={onSchemaChange}
	          id="schema"
	          placeholder="Schema"
	          margin="normal"
	        />

	        <span></span>
	        <span></span>

	        <TextField
	          onChange={onTableChange}
	          id="table"
	          placeholder="Table"
	          margin="normal"
	        />
        </div>
	)
}

export default SchemaText;