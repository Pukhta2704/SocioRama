const mongoose = require('mongoose');
const User = require('../../../../db/models/User');


module.exports = async (req, res) => {
	try {
		const { followid } = req.body;
		const followuser = await User.findByIdAndUpdate(
			followid,
			{
				$push: { followers: req.user },
			},
			{ new: true }
		).select('-password -profilePhoto.publicId');
		const followinguser = await User.findByIdAndUpdate(req.user, {
			$push: { following: followid },
		});
		res.status(200).json({ user: followuser });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
