const router = require('express').Router();
const Toducontroller = require('../controller/tudu.controler'); // Ensure correct spelling

router.post('/StoreTudo', Toducontroller.createtudo); // This route is for creating a new todo item

router.get('/getTududetails', Toducontroller.getUsertudo); // This route is for fetching user's todo items

module.exports = router;
