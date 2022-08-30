const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
    }
});

const Giria = mongoose.model("Giria", WordSchema);
module.exports = Giria;

