import React, { Fragment, useEffect, useRef } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar({ _id }) {
	const sidenav = useRef();
	useEffect(() => {
		M.Sidenav.init(sidenav.current);
	}, []);
	const closeSideNav = () => {
		M.Sidenav.getInstance(sidenav.current).close();
	};
	return (
		<Fragment>
			<nav>
				<div className="nav-wrapper #2196f3 blue">
					<Link to={_id ? '/' : '/signin'} className="brand-logo">
						Sociorama
					</Link>
					<Link to="#" data-target="slide-out" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						{_id ? (
							<>
								<li>
									<Link to="/findpeople">
										<i className="material-icons">search</i>
									</Link>
								</li>
								<li>
									<Link to={`/profile/${_id}`}>Profile</Link>
								</li>
								<li>
									<Link to="/createpost">Createpost</Link>
								</li>

								<li>
									<a onClick={() => localStorage.clear()} href="/signin">
										Signout
									</a>
								</li>
							</>
						) : (
							<>
								<li>
									<Link to="/signin">Signin</Link>
								</li>
								<li>
									<Link to="/signup">Signup</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
			<ul id="slide-out" ref={sidenav} className="sidenav">
				{_id ? (
					<>
						<li>
							<Link to="/findpeople" onClick={closeSideNav}>
								<i className="material-icons">search</i>
							</Link>
						</li>
						<li>
							<Link onClick={closeSideNav} to={`/profile/${_id}`}>
								Profile
							</Link>
						</li>
						<li>
							<Link onClick={closeSideNav} to="/createpost">
								Createpost
							</Link>
						</li>
						<li>
							<a onClick={() => localStorage.clear()} href="/signin">
								Signout
							</a>
						</li>
					</>
				) : (
					<>
						<li>
							<Link onClick={closeSideNav} to="/signin">
								Signin
							</Link>
						</li>
						<li>
							<Link onClick={closeSideNav} to="/signup">
								Signup
							</Link>
						</li>
					</>
				)}
			</ul>
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	_id: state.idState._id,
});
export default connect(mapStateToProps, {})(Navbar);
