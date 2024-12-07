const mongoose = require('mongoose');


const Queston1Schema = new mongoose.Schema({
    question: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
},
    {
        timestamps: true
    }
);

const Queston1 = mongoose.model("Question1", Queston1Schema);

module.exports = Queston1;

