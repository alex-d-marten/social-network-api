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
    .put(updateThought);

// /api/thoughts/thoughtId/userId
router.route('/:thoughtId/:userId')
    .delete(deleteThought);

// /api/thoughts/thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction);

// /api/thoughts/thoughtId/reactions/reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;