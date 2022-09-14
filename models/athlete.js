const mongoose = require('mongoose');

const AthleteSchema = new mongoose.Schema({
    name: String,
    image: String,
    sport: String
}, {timestamps: true});

const Athlete = mongoose.model('Athlete', AthleteSchema);

module.exports = Athlete;