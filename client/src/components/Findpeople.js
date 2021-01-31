import React, { Fragment, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import search_users from '../redux/actions/user_actions/search_users';
import follow from '../redux/actions/user_actions/follow_unfollow/follow';
import unfollow from '../redux/actions/user_actions/follow_unfollow/unfollow';
import Loading from './Loading';
export const Findpeople = ({ search_users, search_user_loading, users, _id, follow, unfollow }) => {
	const [searchby, setsearchby] = useState('name');
	const [query, setquery] = useState('');
	const dispatch = useDispatch();
	const handleChanege = (e) => {
		setquery(e.target.value);

		search_users(query, searchby);
	};
	return (
		<Fragment>
			<div className="container find-people">
				<div className="row">
					<div className="col s12 m8 offset-m2 l10 offset-l1">
						<h5 className="find-people-select">
							<span>Search by</span>
							<span
								style={{ margin: ' 2rem' }}
								className={searchby === 'name' ? 'green lighten-3  blue-text ' : 'pointer'}
								onClick={() => {
									setsearchby('name');
									dispatch({ type: 'reset_search_user_state' });
									if (query === '') return;
									search_users(query, searchby);
								}}
							>
								Name
							</span>
							<span
								className={searchby === 'username' ? 'green lighten-3  blue-text ' : 'pointer'}
								onClick={() => {
									setsearchby('username');
									dispatch({ type: 'reset_search_user_state' });
									if (query === '') return;
									search_users(query, searchby);
								}}
							>
								Username
							</span>
						</h5>
						<div className="input-field col s12">
							<input type="text" value={query} required onChange={handleChanege} />
							<label className="active">{searchby === 'name' ? 'Name' : 'Username'}</label>
						</div>
					</div>

					<ul className="collection col  s12 m8 offset-m2 l10 offset-l1">
						{search_user_loading ? (
							<div className="search-user-loading">
								<Loading />
								<h4>Loading...</h4>
							</div>
						) : (
							<Fragment>
								{users.length !== 0 && (
									<Fragment>
										{users.map((user) => (
											<li className="collection-item avatar" key={user._id}>
												<Link to={`/profile/${user._id}`}>
													<img src={user.profilePhoto.secure_url} alt="" className="circle" />
													<span className="title">{user.name}</span>
													<p>{user.username}</p>
												</Link>
											</li>
										))}
									</Fragment>
								)}
							</Fragment>
						)}
					</ul>
				</div>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	search_user_loading: state.searchUserState.search_user_loading,
	users: state.searchUserState.users,
	_id: state.idState._id,
});

export default connect(mapStateToProps, { search_users, follow, unfollow })(Findpeople);
