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

// /api/thoughts
router.route('/')
    .get(getAllThoughts);

// /api/thoughts/userId
router.route('/:userId')
    .post(addThought);

// /api/thoughts/thoughtId
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
    .post(addReaction);

// /api/thoughts/thoughtId/reactionId
router.route('/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;