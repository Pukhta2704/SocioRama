const mongoose = require('mongoose');
const Post = require('../../../../db/models/Post')

const User = require('../../../../db/models/User');


module.exports = async (req, res) => {
	try {
		const { postid } = req.body;
		const post = await Post.findById(postid).populate('postedBy', '_id followers');
		if (post.postedBy._id != req.user) {
			if (!post.postedBy.followers.includes(req.user))
				return res.status(400).json({ msg: 'Unauthorized' });
		}

		const updatedPost = await Post.findByIdAndUpdate(
			postid,
			{ $pull: { likes: req.user } },
			{ new: true }
		)
			.populate('postedBy', '_id name')
			.populate('comments.commentedBy', '_id name')
			.select('-publicId');
		res.status(200).json({ post: updatedPost });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
