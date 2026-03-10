const Prompt = require('../models/Prompt');

// @desc    Generate a structured AI prompt
// @route   POST /api/prompts/generate
// @access  Public
const generatePrompt = async (req, res) => {
    const {
        websiteName,
        businessType,
        targetAudience,
        websiteStyle,
        colorTheme,
        features,
        pages,
        designInspiration,
        extraInstructions
    } = req.body;

    if (!websiteName || !businessType) {
        return res.status(400).json({ message: 'Website name and business type are required' });
    }

    // Structured Prompt Generation Logic
    const generatedPrompt = `Create a professional and modern website for ${websiteName}, which is a ${businessType} business. 
${targetAudience ? `The target audience for this website is ${targetAudience}.` : ''}
${websiteStyle ? `The desired style for the website is ${websiteStyle}.` : ''}
${colorTheme ? `The color theme should be ${colorTheme}.` : ''}
${features && features.length > 0 ? `Key features to include: ${features.join(', ')}.` : ''}
${pages && pages.length > 0 ? `Essential pages: ${pages.join(', ')}.` : ''}
${designInspiration ? `Design inspiration: ${designInspiration}.` : ''}
${extraInstructions ? `Additional requirements: ${extraInstructions}` : ''}
The overall design should be high-end, responsive, and follow modern UI/UX standards similar to Stripe and Vercel.`;

    res.status(200).json({ generatedPrompt });
};

// @desc    Save a prompt
// @route   POST /api/prompts/save
// @access  Public
const savePrompt = async (req, res) => {
    try {
        const {
            websiteName,
            businessType,
            targetAudience,
            websiteStyle,
            colorTheme,
            features,
            pages,
            designInspiration,
            extraInstructions,
            generatedPrompt
        } = req.body;

        const prompt = await Prompt.create({
            websiteName,
            businessType,
            targetAudience,
            websiteStyle,
            colorTheme,
            features,
            pages,
            designInspiration,
            extraInstructions,
            generatedPrompt
        });

        res.status(201).json(prompt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get user prompt history
// @route   GET /api/prompts/history
// @access  Public
const getPromptHistory = async (req, res) => {
    try {
        const prompts = await Prompt.find({}).sort({ createdAt: -1 });
        res.status(200).json(prompts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a prompt
// @route   DELETE /api/prompts/:id
// @access  Public
const deletePrompt = async (req, res) => {
    try {
        const prompt = await Prompt.findById(req.params.id);

        if (!prompt) {
            return res.status(404).json({ message: 'Prompt not found' });
        }

        // Removed user authorization check since login is removed
        await prompt.deleteOne();
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    generatePrompt,
    savePrompt,
    getPromptHistory,
    deletePrompt
};
