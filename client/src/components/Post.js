import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import delete_post from '../redux/actions/post_actions/create_delete_post/delete_post';
import like_post from '../redux/actions/post_actions/like_unlike_post/like_post';
import unlike_post from '../redux/actions/post_actions/like_unlike_post/unlike_post';
import create_comment from '../redux/actions/post_actions/create_delete_comment/create_comment';
import delete_comment from '../redux/actions/post_actions/create_delete_comment/delete_comment';

function Post({ post, _id, delete_post, like_post, unlike_post, create_comment, delete_comment }) {
	const [comment, setcomment] = useState('');
	const handleAddComment = (e) => {
		e.preventDefault();
		create_comment(comment, post._id);
		setcomment('');
	};
	return (
		<Fragment>
			<div className="container home">
				<div className="row">
					<div className="col s12 m8 offset-m2 ">
						<div className="card">
							<div className="card">
								<div className="card-content post-top">
									<h4>
										<Link to={`/profile/${post.postedBy._id}`}>{post.postedBy.name}</Link>
									</h4>
									{post.postedBy._id === _id && (
										<i onClick={() => delete_post(post._id)} className="material-icons pointer">
											delete
										</i>
									)}
								</div>
								<div className="card-image">
									<img src={post.secure_url} alt="" />
								</div>
								<div className="card-content">
									<h5>{post.caption}</h5>
									<div className="caption">
										<h6>{post.likes.length} likes</h6>
										{post.likes.includes(_id) ? (
											<i
												className="material-icons l_un pointer"
												onClick={() => unlike_post(post._id)}
											>
												thumb_down
											</i>
										) : (
											<i
												className="material-icons l_un pointer"
												onClick={() => like_post(post._id)}
											>
												thumb_up
											</i>
										)}
									</div>
									{post.comments.map((comment) => (
										<div key={comment._id} className="comments ">
											<h5> {comment.commentedBy.name}</h5>
											<h6 className="comment">{comment.text}</h6>
											{comment.commentedBy._id === _id || post.postedBy._id === _id ? (
												<i
													className="material-icons ml-auto pointer"
													style={{ marginLeft: 'auto' }}
													onClick={() => delete_comment(comment._id)}
												>
													delete
												</i>
											) : null}
										</div>
									))}
									<form className="add-comment" onSubmit={handleAddComment}>
										<input
											type="text"
											placeholder="Add a comment"
											required
											value={comment}
											onChange={(e) => setcomment(e.target.value)}
										/>
										<button className="btn btn-waves" type="submit">
											<i className="material-icons ">send</i>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
const mapStateToProps = (state) => ({
	_id: state.idState._id,
});
export default connect(mapStateToProps, {
	delete_post,
	like_post,
	unlike_post,
	create_comment,
	delete_comment,
})(Post);
