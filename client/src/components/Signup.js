import React, { useState } from 'react';
import { connect } from 'react-redux';
import sign_up from '../redux/actions/auth_actions/sign_up';
import Loading from './Loading';
import {Link} from "react-router-dom"
function Signup({ sign_up_loading, sign_up }) {
	const [name, setname] = useState('');
	const [username, setusername] = useState('');
	const [password, setpassword] = useState('');
	
	const handleSignup = (e) => {
		e.preventDefault();
		sign_up(name, username, password);
	};
	return (
		<div className="container forms">
			<div className="row">
				<div className="col s12 m10 offset-m1 l8 offset-l2">
					<div className="card">
						<h3 className="center-align">Signup</h3>
						<form className="reg-form" onSubmit={handleSignup}>
							<div className="input-field">
								<input
									required
									type="text"
									placeholder="Name"
									value={name}
									onChange={(e) => setname(e.target.value)}
								/>
							</div>
							<div className="input-field">
								<input
									className="validate"
									required
									type="text"
									placeholder="Username"
									value={username}
									onChange={(e) => setusername(e.target.value)}
								/>
							</div>
							<div className="input-field">
								<input
									required
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setpassword(e.target.value)}
								/>
							</div>
							<p className="center-align">
								Already have an account?<Link to="/signin"> Sign in here.</Link>
							</p>
							{sign_up_loading && (
								<div className="loading">
									{' '}
									<Loading />
								</div>
							)}
							{sign_up_loading ? (
								<button type="submit" disabled className=" btn btn-waves">
									Signing up...
								</button>
							) : (
								<button type="submit" className=" btn btn-waves">
									Signup
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	sign_up_loading: state.signUpState.sign_up_loading,
});
export default connect(mapStateToProps, { sign_up })(Signup);
