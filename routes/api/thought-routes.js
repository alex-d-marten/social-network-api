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
    .post(addThought)
    .get(getAllThoughts);

router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
    .post(addReaction);

router.route('/:thoughtId/:reactionId')
    .delete(removeReaction);
    
module.exports = router;