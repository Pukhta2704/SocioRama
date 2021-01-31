const mongoose = require('mongoose');
const User = require('../../../db/models/User');


module.exports = async (req, res) => {
	try {
		const { query, searchby } = req.query;
		let userPattern = new RegExp('^' + query);
		let users;
		if (searchby == 'name')
			users = await User.find({ name: { $regex: userPattern } }).select(
				'-password -profilePhoto.publicId'
			);
		else users = await User.find({ username: { $regex: userPattern } }).select('-password');

		res.status(200).json({ users });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
