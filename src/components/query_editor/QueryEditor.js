import React from 'react';
import './QueryEditor.css';

const TextField = ({ onChange }) => {
	return (
		<div className="centeredTextArea">
			<textarea rows="13" cols="100" onChange={onChange}>
			</textarea>
		</div>
	)
}

export default TextField;