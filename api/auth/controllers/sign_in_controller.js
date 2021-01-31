require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../../../db/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
	try {
		const { username, password } = req.body;
		if (!username || !password) return res.status(400).json({ msg: 'All fields are required.' });
		const doesExist = await User.findOne({ username });
		if (!doesExist) return res.status(400).json({ msg: 'Invalid credentials.' });
		const isMatch = await bcrypt.compare(password, doesExist.password);
		if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' });
		const token = jwt.sign({ _id: doesExist._id }, process.env.SECRET_KEY);
		res.status(200).json({ msg: 'Signed in successfully.', _id: doesExist._id, token });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
