const express = require('express');
const router = express.Router();

const multer=require('multer')
const upload=multer()


const authenticate_user = require('../../middleware/authenticate_user');
const get_all_posts_controllers = require('./controllers/get_all_posts_controllers');
const create_post_controller = require('./controllers/create_delete_post_controllers/create_post_controller');
const delete_post_controller = require('./controllers/create_delete_post_controllers/delete_post_controller');
const like_controller = require('./controllers/like_unlike_controllers/like_controller');
const unlike_controller = require('./controllers/like_unlike_controllers/unlike_controller');
const create_comment_controller = require('./controllers/add_delete_comment_controllers/create_comment_controller');
const delete_comment_controller = require('./controllers/add_delete_comment_controllers/delete_comment_controller');

router.get('/getallposts', authenticate_user, get_all_posts_controllers);

router.post('/createpost/', authenticate_user,upload.single('file'), create_post_controller);

router.delete('/deletepost/:postid', authenticate_user, delete_post_controller);

router.put('/like', authenticate_user, like_controller);

router.put('/unlike', authenticate_user, unlike_controller);

router.put('/addcomment', authenticate_user, create_comment_controller);

router.put('/deletecomment', authenticate_user, delete_comment_controller);



module.exports = router;
