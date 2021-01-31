import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import fetch_posts from '../redux/actions/post_actions/fetch_posts';
import Loading from './Loading';
import Post from './Post';
import M from 'materialize-css';

function Home({ fetch_posts, posts, hasMore, first_time_fetched, fetch_posts_loading, _id }) {
	useEffect(() => {
		if (!_id) return;
		if (first_time_fetched) return;
		fetch_posts();
	}, [fetch_posts, first_time_fetched, _id]);
	useEffect(() => {
		if (posts.length === 0 && first_time_fetched) {
			M.toast({
				html: 'No posts here. You can create posts or Click on search icon to discover prople.',
				displayLength: '7000',
			});
		}
	});
	return (
		<Fragment>
			{posts.map((post) => (
				<Post key={post._id} post={post} />
			))}
			{fetch_posts_loading ? (
				<div
					style={{ height: fetch_posts_loading && posts.length === 0 ? '70vh' : '' }}
					className="pagination-loader"
				>
					<Loading />
					<h4>Loading...</h4>
				</div>
			) : (
				<Fragment>
					{hasMore && (
						<div className="show-more-btn">
							<button onClick={fetch_posts} className="waves-effect waves-light btn">
								Show More Posts
							</button>
						</div>
					)}
				</Fragment>
			)}
		</Fragment>
	);
}
const mapStateToProps = (state) => ({
	count: state.postsState.count,
	posts: state.postsState.posts,
	hasMore: state.postsState.hasMore,
	first_time_fetched: state.postsState.first_time_fetched,
	fetch_posts_loading: state.postsState.fetch_posts_loading,
	_id: state.idState._id,
});

export default connect(mapStateToProps, { fetch_posts })(Home);
