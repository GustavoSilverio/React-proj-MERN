const mongoose = require('mongoose');

const NomepropSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
    }
});

const Nomeprop = mongoose.model("Nomeprop", NomepropSchema);
module.exports = Nomeprop;

