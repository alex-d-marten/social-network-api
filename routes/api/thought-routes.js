const router = require('express').Router();
const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/')
    .get(getAllThoughts);

router.route('/:userId')
    .post(addThought);

router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
    .post(addReaction);

router.route('/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;