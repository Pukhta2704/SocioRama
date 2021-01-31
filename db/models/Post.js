const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = mongoose.Schema({
	caption: {
		type: String,
		default: '',
	},
	secure_url: {
		type: String,
		required: true,
	},
	publicId: {
		type: String,
		required: true,
	},
	postedBy: {
		type: ObjectId,
		ref: 'User',
		required: true,
	},
	likes: [
		{
			type: ObjectId,
			ref: 'User',
		},
	],
	comments: [
		{
			text: {
				type: String,
				required: true,
			},
			commentedBy: {
				type: ObjectId,
				ref: 'User',
			},
		},
	],
	postedOn: {
		type: Date,
		default: Date.now,
	},
});
module.exports=Post=mongoose.model('Post', postSchema);
