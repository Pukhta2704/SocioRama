const mongoose = require('mongoose');
const User = require('../../../../db/models/User');


module.exports = async (req, res) => {
	try {
		const { unfollowid } = req.body;
		const unfollowuser = await User.findByIdAndUpdate(
			unfollowid,
			{
				$pull: { followers: req.user },
			},
			{ new: true }
		).select('-password -profilePhoto.publicId');
		const unfollowinguser = await User.findByIdAndUpdate(req.user, {
			$pull: { following: unfollowid },
		});
		res.status(200).json({ user: unfollowuser });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
