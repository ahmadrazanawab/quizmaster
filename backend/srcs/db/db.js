const mongoose = require('mongoose');
mongodb_url = "mongodb://127.0.0.1:27017/quizMaster";


mongoose.set('strictQuery', false);
const connetedToMongodb = async () => {
    try {
        const mongondb = await mongoose.connect(mongodb_url, () => {
            console.log("Connection is Successfull");
        });
        console.log(mongoDB.connection.host);
    } catch (error) {
        console.log("Connection Error...", error);
        res.status(501).json("Something is wrong");
    }
}


module.exports = connetedToMongodb;