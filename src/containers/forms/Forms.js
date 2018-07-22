import React from 'react';
import Form from '../form/Form';

const Forms = (props) => {
	return (
		<div>
			{
				props.forms.map((form) => {
					return <Form
							 key={'form'+form}
							 onFormAdd={props.onFormAdd}
							 onQueryChange={props.onQueryChange}
							 onSchemaChange={props.onSchemaChange}
							 onTableChange={props.onTableChange}
							 onCadenceSelect={props.onCadenceSelect}
							 onDateChange={props.onDateChange}
							 onSubmitQuery={props.onSubmitQuery}
							 email={props.email}
						   />
				})
			}
		</div>
	)	
}

export default Forms;