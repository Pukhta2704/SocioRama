import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import sign_in from '../redux/actions/auth_actions/sign_in';
import {Link} from 'react-router-dom';

function Signin({ sign_in_loading, sign_in }) {
	const [username, setusername] = useState('');
	const [password, setpassword] = useState('');

	const handleSignin = (e) => {
		e.preventDefault();
		sign_in(username, password);
	};
	return (
		<div className="container forms">
			<div className="row">
				<div className="col s12 m10 offset-m1 l8 offset-l2">
					<div className="card">
						<h3 className="center-align">Signin</h3>
						<form className="reg-form" onSubmit={handleSignin}>
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
								Don't have an account?<Link to="/signup"> Sign up here.</Link>
							</p>
							{sign_in_loading && (
								<div className="loading">
									<Loading />
								</div>
							)}
							{sign_in_loading ? (
								<button type="submit" disabled className=" btn btn-waves">
									Signing in...
								</button>
							) : (
								<button type="submit" className=" btn btn-waves">
									Signin
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
	sign_in_loading: state.signInState.sign_in_loading,
});

export default connect(mapStateToProps, { sign_in })(Signin);
