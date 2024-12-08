const mongoose = require('mongoose');
const { DB_NAME } = require('../constants');
// const MONGODB_URL = "mongodb://127.0.0.1:27017/quizMaster"

const MONGODB_URI = "mongodb+srv://ahmadrazanawab:heVoTlMSm9Q7Qxky@cluster0.xuqma.mongodb.net"

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}


module.exports = connectDB;
