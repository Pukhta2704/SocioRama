require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../../../db/models/User');

const { cloudinary } = require('../../../db/cloudinary');

module.exports = async (req, res) => {
	try {
		console.log('here');
		let tempUser = await User.findById(req.user);
		if (tempUser.profilePhoto.publicId != '')
			await cloudinary.uploader.destroy(tempUser.profilePhoto.publicId);

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

		const user = await User.findByIdAndUpdate(
			req.user,
			{
				profilePhoto: {
					secure_url: uploadedRes.secure_url,
					publicId: uploadedRes.public_id,
				},
			},
			{ new: true }
		).select('-password -profilePhoto.publicId');
		res.status(200).json({ user });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
