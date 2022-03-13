const router = require('express').Router();
const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

router.route('/')
    .post(addThought)
    .get(getAllThoughts);

router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;