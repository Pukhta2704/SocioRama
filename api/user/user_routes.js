const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();

const authenticate_user = require('../../middleware/authenticate_user');
const edit_profile_picture_controller = require('./controllers/edit_profile_picture_controller');
const follow_user_controller = require('./controllers/follow_unfollow_controllers/follow_user_controller');
const unfollow_user_controller = require('./controllers/follow_unfollow_controllers/unfollow_user_controller');
const get_profile_controller = require('./controllers/get_profile_controller');
const search_users_controllers = require('./controllers/search_users_controllers');

router.get('/getprofile/:id', authenticate_user, get_profile_controller);

router.put('/follow', authenticate_user, follow_user_controller);

router.put('/unfollow', authenticate_user, unfollow_user_controller);

router.put(
	'/editprofilephoto',
	authenticate_user,
	upload.single('file'),
	edit_profile_picture_controller
);

router.get('/searchusers', authenticate_user, search_users_controllers);

module.exports = router;
