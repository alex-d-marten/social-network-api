const router = require('express').Router();
const {
    getAllUsers,
    createUser
} = require('../../controllers/user-controller');

// GET routes
router.route('/')
    .get(getAllUsers)
    .post(createUser);


module.exports = router;