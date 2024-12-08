const dotenv = require('dotenv');
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const connetedToMongodb = require('./db/db');

const port = process.env.PORT || 8000
connetedToMongodb();
app.use(bodyParser.json());
app.use(express.json());

dotenv.config({
    path: './.env'
})

app.use(cors());
app.get('/',(req, res) => {
    res.send("hello worlds 2");
})

app.use('/api/c1/', require('./routes/Category.route'));
app.use('/api/a1/', require('./routes/Answer.route'));


app.listen(port,()=> {
    console.log(`Server is started at http://localhost:${port}`);
})

