const mongoose = require('mongoose');
const Post = require('../../../../db/models/Post')


module.exports = async (req, res) => {
	try {
		const { commentid } = req.body;
		const post = await Post.findOne({ 'comments._id': commentid }).populate(
			'postedBy',
			'_id followers'
		);
		if (post.postedBy.followers.includes(req.user) || post.postedBy._id == req.user) {
			const savedPost = await Post.findOneAndUpdate(
				{ 'comments._id': commentid },
				{
					$pull: {
						comments: { _id: commentid },
					},
				},
				{
					new: true,
				}
			)
				.populate('postedBy', '_id name')
				.populate('comments.commentedBy', '_id name');
			res.status(200).json({ post: savedPost });
		} else {
			res.status(403).json({ msg: 'Unautorized.' });
		}
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
