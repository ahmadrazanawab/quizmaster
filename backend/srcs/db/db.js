const mongoose = require('mongoose');
// const { DB_NAME } = require('../constants');
const MONGODB_URL = "mongodb://127.0.0.1:27017/quizMaster"

// const MONGODB_URL = "mongodb+srv://ahmadrazanawab:ahmad123@cluster0.xuqma.mongodb.net/"

mongoose.set('strictQuery', true);
const connetedToMongodb = async (req,res) => {
    try {
        const mongodb = mongoose.connect(MONGODB_URL, () => {
            console.log("Connection is Successfull");
        });
        // console.log(mongodb.connection.host);
    } catch (error) {
        console.log("Connection Error...", error);
        res.status(501).json("Something is wrong");
    }
}


module.exports = connetedToMongodb;


// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
//     } catch (error) {
//         console.log("MONGODB connection error ", error);
//         process.exit(1);
//     }
// }

// export default connectDB