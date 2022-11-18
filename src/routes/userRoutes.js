'use strict';
const express = require('express');
const router = express.Router();

const { UsersController } = require('../controllers/usersController');
const { ensureAuth, ensureGuest } = require('../middlewares/auth');

router.post('/sign_up', ensureGuest, UsersController.signUpPost);
router.post('/login', ensureGuest, UsersController.login);
router.get('/users', ensureAuth, (req, res) => {
	return res.status(200).send('This is a pretty cool route');
});
router.post('/logout', ensureAuth, UsersController.logout);

module.exports = router;
