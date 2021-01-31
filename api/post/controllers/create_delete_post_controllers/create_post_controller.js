require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('../../../../db/models/Post')

const { cloudinary } = require('../../../../db/cloudinary');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
	try {
		console.log(req.file)
		const { caption } = req.body;
		const file = req.file;
		if (!file) return res.status(400).json({ msg: 'Image is required.' });

		if (!file.mimetype.match(/jpg|jpeg|png|gif$i/)) {
			return res.status(400).json({ msg: 'Please select a valid image.' });
		}
		var image = 'data:image/jpeg;base64,';
		image += file.buffer.toString('base64');
		const uploadedRes = await cloudinary.uploader.upload(image, {
			upload_preset: process.env.UPLOAD_PRESET,
		});
		const post = new Post({
			caption,
			secure_url: uploadedRes.secure_url,
			postedBy: req.user,
			publicId: uploadedRes.public_id,
		});
		const saved = await post.save();
		const newPost = await Post.findById(saved._id)
			.populate('postedBy', '_id name')
			.populate('comments.commentedBy', '_id name')
			.select('-publicId');
		res.status(200).json({ post: newPost, msg: 'Post uploaded.' });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
