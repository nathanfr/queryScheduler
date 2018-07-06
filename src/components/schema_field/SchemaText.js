import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField'
import './SchemaText.css';

const inlineStyle = {
  color: 'white',
  '&::placeholder': {
  	color: 'white',
  	'text-decoration': 'none',
  	underlineStyle: {display: 'none'}
  },
  underlineStyle: {display: 'none'}
};

const SchemaText = () => {
	return (
		<div id="schemaDefinition">
			<TextField
	          id="schema"
	          placeholder="Schema"
	          margin="normal"
	          style={inlineStyle}
	        />

	        <span></span>
	        <span></span>

	        <TextField
	          id="table"
	          placeholder="Table"
	          margin="normal"
	          style={inlineStyle}
	        />
        </div>
	)
}

export default SchemaText;