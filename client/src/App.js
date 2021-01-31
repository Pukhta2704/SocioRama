import React, { Fragment, useEffect } from 'react';
import { Route, useHistory, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Createpost from './components/Createpost';
import Findpeople from './components/Findpeople';
import { connect } from 'react-redux';
import is_logged_in from './redux/actions/auth_actions/is_logged_in';

function App({ is_logged_in, is_logged_in_loading }) {
	const { token } = useParams();
const history=useHistory()
	useEffect(() => {
		if (token) {
			localStorage.clear();
			localStorage.setItem('x-auth-token', token);
			history.push('/')
			return
		}
		is_logged_in();
	}, [is_logged_in, token,history]);
	return (
		<Fragment>
			{is_logged_in_loading ? (
				<div className="is-logged-in-loading">
					<div className="progress">
						<div className="indeterminate"></div>
					</div>
					<h4>Loading...</h4>
				</div>
			) : (
				<Fragment>
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route exact path="/profile/:id" component={Profile} />
					<Route exact path="/signin" component={Signin} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/createpost" component={Createpost} />
					<Route exact path="/findpeople" component={Findpeople} />
				</Fragment>
			)}
		</Fragment>
	);
}
const mapStateToProps = (state) => ({
	is_logged_in_loading: state.idState.is_logged_in_loading,
});
export default connect(mapStateToProps, { is_logged_in })(App);
