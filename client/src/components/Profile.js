import React, { Fragment, useEffect, useState } from 'react';
import Loading from './Loading';
import fetch_profile from '../redux/actions/user_actions/fetch_profile';
import follow from '../redux/actions/user_actions/follow_unfollow/follow';
import unfollow from '../redux/actions/user_actions/follow_unfollow/unfollow';
import edit_profile_photo from '../redux/actions/user_actions/edit_profile_photo';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Post from './Post';
function Profile({
	fetch_profile,
	fetch_profile_loading,
	edit_profile_photo_loading,
	user,
	posts,
	_id,
	follow,
	unfollow,
	edit_profile_photo,
}) {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [image, setimage] = useState(undefined);
	useEffect(() => {
		if (!_id) return;
		fetch_profile(id);
		return () => dispatch({ type: 'reset_profile_state' });
	}, [fetch_profile, id, dispatch, _id]);
	const handleSubmit = (e) => {
		e.preventDefault();
		edit_profile_photo(image);
	};
	return (
		<Fragment>
			{fetch_profile_loading ? (
				<div className="profile-loading">
					<Loading />
					<h4>Loading...</h4>
				</div>
			) : (
				<Fragment>
					{user.followers && (
						<div className="container">
							<div className="row">
								<div className="col s8 offset-s2 profile-upper">
									{edit_profile_photo_loading ? (
										<Loading />
									) : (
										<img
											className="responsive-image"
											src={user.profilePhoto && user.profilePhoto.secure_url}
											alt="..."
										/>
									)}
									<div>
										<h5>{user.name}</h5>
										<h5>{user.username}</h5>
										{user._id === _id && (
											<form onSubmit={handleSubmit}>
												<div className="file-field input-field">
													<div className="btn">
														<span>Edit profile Photo</span>
														<input
															type="file"
															required
															onChange={(e) => setimage(e.target.files[0])}
														/>
													</div>
													<div className="file-path-wrapper">
														<input className="file-path validate" type="text" />
													</div>
												</div>
												{image !== undefined && (
													<button
														className="btn"
														disabled={edit_profile_photo_loading && true}
														type="submit"
														onClick={handleSubmit}
													>
														Submit
													</button>
												)}
											</form>
										)}

										<div>
											<h6>
												<span>{posts.length} posts</span>
												<span>{user.followers.length} followers</span>
												<span>{user.following.length} following</span>
											</h6>
										</div>
										{user._id !== _id && user.followers.includes(_id) && (
											<button className="waves-effect btn" onClick={() => unfollow(user._id)}>
												Unfollow
											</button>
										)}
										{user._id !== _id && !user.followers.includes(_id) && (
											<button className="waves-effect btn" onClick={() => follow(user._id)}>
												Follow
											</button>
										)}
									</div>
								</div>
								{user._id === _id && (
									<Fragment>
										{posts.map((post) => (
											<Post post={post} key={post._id} />
										))}
									</Fragment>
								)}
								{user._id !== _id && (
									<div className="col s8 offset-s2 profile-lower">
										{posts.map((post) => (
											<img
												key={post._id}
												className="responsive-image pointer"
												src={post.secure_url}
												alt="..."
											/>
										))}
									</div>
								)}
							</div>
						</div>
					)}
				</Fragment>
			)}
		</Fragment>
	);
}
const mapStateToProps = (state) => ({
	fetch_profile_loading: state.profileState.fetch_profile_loading,
	edit_profile_photo_loading: state.profileState.edit_profile_photo_loading,
	user: state.profileState.user,
	posts: state.profileState.posts,
	_id: state.idState._id,
});

export default connect(mapStateToProps, { fetch_profile, follow, unfollow, edit_profile_photo })(
	Profile
);
