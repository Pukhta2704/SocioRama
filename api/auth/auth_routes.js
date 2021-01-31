const express = require('express');
const router = express.Router();

const sign_up_controller = require('./controllers/sign_up_controller');
const sign_in_controller = require('./controllers/sign_in_controller');
const authenticate_user = require('../../middleware/authenticate_user');
const is_token_valid_controller = require('./controllers/is_token_valid_controller');

router.post('/signup', sign_up_controller);

router.post('/signin', sign_in_controller);

router.get('/istokenvalid', authenticate_user, is_token_valid_controller);

module.exports = router;
