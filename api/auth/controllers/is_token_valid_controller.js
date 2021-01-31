module.exports = (req, res) => {
	try {
		res.status(200).json({ _id: req.user });
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};
