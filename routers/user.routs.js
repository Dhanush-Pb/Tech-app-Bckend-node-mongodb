const router = require('express').Router();
const UserController = require('../controller/user.controler'); // Ensure correct spelling

router.post('/registration', UserController.register);
router.post('/login', UserController.login);
module.exports = router;
