const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
    websiteName: {
        type: String,
        required: true,
    },
    businessType: {
        type: String,
        required: true,
    },
    targetAudience: {
        type: String,
    },
    websiteStyle: {
        type: String,
    },
    colorTheme: {
        type: String,
    },
    features: {
        type: [String],
    },
    pages: {
        type: [String],
    },
    designInspiration: {
        type: String,
    },
    extraInstructions: {
        type: String,
    },
    generatedPrompt: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Prompt', promptSchema);
