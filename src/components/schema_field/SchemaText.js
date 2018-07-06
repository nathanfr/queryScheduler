import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField'
import './SchemaText.css';

const SchemaText = () => {
	return (
		<div id="schemaDefinition">
			<TextField
	          id="schema"
	          placeholder="Schema"
	          margin="normal"
	        />

	        <span></span>
	        <span></span>

	        <TextField
	          id="table"
	          placeholder="Table"
	          margin="normal"
	        />
        </div>
	)
}

export default SchemaText;