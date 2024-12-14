const mongoose = require('mongoose')

const vacancySchema = new mongoose.Schema({
    title: {
        type: String,
    },
    company: {
        type: String,

    },
    description: {
        type: String
    },
    type: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    },
    salary: {
        type: String,
    }

})

module.exports = mongoose.models.vacancySchema || mongoose.model("Vacancy", vacancySchema)
