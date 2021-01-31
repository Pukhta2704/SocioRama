require('dotenv').config();
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	profilePhoto: {
		secure_url: {
			type: String,
			default: process.env.DEFAULT_PROFILE_PHOTO,
		},
		publicId: {
			type: String,
			default: '',
		},
	},
	followers: [
		{
			type: ObjectId,
			ref: 'User',
		},
	],
	following: [
		{
			type: ObjectId,
			ref: 'User',
		},
	],
});
module.exports=User=mongoose.model('User', userSchema);
