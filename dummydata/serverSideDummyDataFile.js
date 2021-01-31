
// const mongoose = require('mongoose');
// const Post = require('../../../../db/models/Post')

// const User = require('../../../db/models/User');

// app.put('/dummyputlikes', async (req, res) => {
// 	const posts = await Post.find().populate('postedBy', '_id followers');
// 	posts.forEach((post) => {
// 		post.postedBy.followers.forEach(async (follower) => {
// 			await Post.findByIdAndUpdate(post._id, { $push: { likes: follower } });
// 		});
// 	});
// 	res.json({ msg: 'ok' });
// });

// const { cloudinary } = require('../db/cloudinary');

// app.post('/dummyprofilephoto', async (req, res) => {
//     const {  image } = req.body;
//     const count=parseInt(req.body.count)
// 	const uploadedRes = await cloudinary.uploader.upload(image, {
// 		upload_preset: process.env.UPLOAD_PRESET,
// 	});
// console.log(count)
// 	const user = await User.find().skip(count).limit(1);
// 	await user[0].updateOne({
// 		profilePhoto: {
// 			secure_url: uploadedRes.secure_url,
// 			publicId: uploadedRes.public_id,
// 		},
// 	});
// 	res.status(200).json({ msg: 'ok' });
// });