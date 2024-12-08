const dotenv = require('dotenv');
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./db/db');

const port = process.env.PORT || 8000
// connetedToMongodb();
    connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port:${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("MONGO db connection failed !!! ",error)
    })


app.use(bodyParser.json());
app.use(express.json());

dotenv.config({
    path: './.env'
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.get('/',(req, res) => {
    res.send("hello worlds 2");
})

app.use('/api/c1/', require('./routes/Category.route'));
app.use('/api/a1/', require('./routes/Answer.route'));

