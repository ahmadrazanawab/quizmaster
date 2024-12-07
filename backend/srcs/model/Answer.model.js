const mongoose = require('mongoose');


const AnswerSchema = new mongoose.Schema({
    answer: {
        type: String,
        require: true,
    },
},
    {
        timestamps: true
    }
);

const Answer1 = mongoose.model("Answer1", AnswerSchema);

module.exports = Answer1;

