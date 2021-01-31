const mongoose = require('mongoose');
const User = require('../../../db/models/User');

const Post = require('../../../db/models/Post')


module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id).select('-password -profilePhoto.publicId');
		const posts = await Post.find({ postedBy: id })
			.populate('postedBy', '_id name')
			.populate('comments.commentedBy', '_id name')
			.select('-publicId')
			.sort({ postedOn: -1 });

		res.status(200).json({ posts, user });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
