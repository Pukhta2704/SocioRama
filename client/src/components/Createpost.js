import React, { useState } from 'react';
import { connect } from 'react-redux';
import create_post from '../redux/actions/post_actions/create_delete_post/create_post';
import Loading from './Loading';

function Createpost({ create_post, create_post_loading }) {
	const [image, setimage] = useState();
	const [caption, setcaption] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		create_post(caption, image);
	};
	return (
		<div className="container forms">
			<div className="row">
				<div className="col s12 m10 offset-m1 l8 offset-l2">
					<div className="card">
						<h3 className="center-align">Create post</h3>
						<form className="reg-form" onSubmit={handleSubmit}>
							<div className="input-filed">
								<input
									type="text"
									placeholder="Caption"
									value={caption}
									onChange={(e) => setcaption(e.target.value)}
								/>
							</div>
							<div className="file-field input-field">
								<div className="btn">
									<span>File</span>
									<input type="file" required onChange={(e) => setimage(e.target.files[0])} accept="image/*" />
								</div>
								<div className="file-path-wrapper">
									<input className="file-path validate" type="text" />
								</div>
							</div>

							{create_post_loading && (
								<div className="loading">
									<Loading />
								</div>
							)}
							{create_post_loading ? (
								<button type="submit" disabled className=" btn btn-waves">
									Uploading...
								</button>
							) : (
								<button type="submit" className=" btn btn-waves">
									Upload
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
	create_post_loading: state.postsState.create_post_loading,
});
export default connect(mapStateToProps, { create_post })(Createpost);
