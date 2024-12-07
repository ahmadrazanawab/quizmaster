const mongoose = require('mongoose');


const CategorySchema = new mongoose.Schema({
    category: {
        type: String,
        require: true,
    },
},
    {
        timestamps: true
    }
);

const Category1 = mongoose.model("Category1", CategorySchema);

module.exports = Category1;

