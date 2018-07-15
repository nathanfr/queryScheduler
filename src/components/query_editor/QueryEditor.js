import React from 'react';
import ReactDOM from 'react-dom';
import './QueryEditor.css';

const TextField = ({ onChange }) => {
	return (
		<div className="centeredTextArea">
			<textarea rows="15" cols="100" onChange={onChange}>
			</textarea>
		</div>
	)
}

export default TextField;