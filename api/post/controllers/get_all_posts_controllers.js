const mongoose = require('mongoose');
const Post = require('../../../db/models/Post')

const User = require('../../../db/models/User');


module.exports = async (req, res) => {
	try {
		const count = parseInt(req.query.count);
		const user = await User.findById(req.user);

		let following = user.following;
		following.push(req.user);
		const posts = await Post.find({ postedBy: following })
			.populate('postedBy', '_id name')
			.populate('comments.commentedBy', '_id name')
			.select('-publicId')
			.skip(count)
			.limit(5)
			.sort({ postedOn: -1 });

			res.status(200).json({ posts });
		
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
