const express = require('express');
const router = express.Router();
const {
    generatePrompt,
    savePrompt,
    getPromptHistory,
    deletePrompt
} = require('../controllers/promptController');

router.post('/generate', generatePrompt);
router.post('/save', savePrompt);
router.get('/history', getPromptHistory);
router.delete('/:id', deletePrompt);

module.exports = router;
