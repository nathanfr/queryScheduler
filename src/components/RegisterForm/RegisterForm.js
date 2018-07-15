import React from 'react';
import '../LogInForm/LogInForm.css';

class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
		console.log(event.target.value);
	}

	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
	}

	render() {
		return (
			<div>
				<article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
					<main className="pa4 black-80">
					  <form className="measure center">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 tc">
					      <legend className="f4 fw6 ph0 mh0">Register</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
					        <input
					        	onChange={this.onEmailChange}
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
					        	type="email"
					        	name="email-address" 
					        	id="email-address"
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" for="password">Password</label>
					        <input
					        	onChange={this.onPasswordChange}
					        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
					        	type="password"
					        	name="password" 
					        	id="password"
					        />
					      </div>
					    </fieldset>
					    <div className="centeredButton">
					      <input
					      	onClick={this.onSubmitRegister}
					      	className="b tc ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
					      	type="submit"
					      	value="Register"
					      />
					    </div>
					  </form>
					</main>
				</article>
			</div>
		)
	}
}

export default RegisterForm;