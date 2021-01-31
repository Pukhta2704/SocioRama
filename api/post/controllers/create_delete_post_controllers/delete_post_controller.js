const mongoose = require('mongoose');
const Post = require('../../../../db/models/Post')

const { cloudinary } = require('../../../../db/cloudinary');
module.exports = async (req, res) => {
	try {
		const { postid } = req.params;
		const post = await Post.findOneAndRemove({ _id: postid, postedBy: req.user });
		await cloudinary.uploader.destroy(post.publicId);
		res.status(200).json({ msg: 'Post deleted.' });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
