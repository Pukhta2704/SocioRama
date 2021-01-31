require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../../../db/models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
	try {
		const { name, username, password } = req.body;
		if (!name || !username || !password)
			return res.status(400).json({ msg: 'All fields are required.' });
		const doesExist = await User.findOne({ username });
		if (doesExist) return res.status(400).json({ msg: 'User already exists.' });
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(password, salt);
		const user = new User({
			name,
			password: hashedPassword,
			username,
		});
		const saved = await user.save();
		const token = jwt.sign({ _id: saved._id }, process.env.SECRET_KEY);

		res.status(200).json({ msg: 'Signed up successfully.', _id: saved._id, token });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
