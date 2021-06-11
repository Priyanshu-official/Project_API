const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    projectAuthor: {
        type: String,
        required: true,
    },    
    projectAbout: {
        type: String,
        required: true,
    },
    projectDemo: {
        type: String,
        required: true,
    },
    projectLink: {
        type: String,
        required: true,
    },
    projectSource: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('projectItem', projectSchema)